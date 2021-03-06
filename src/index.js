import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import compression from 'compression';

import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(compression());

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      const options = opts;
      options.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    },
  }),
);
app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) =>
      route.loadData ? route.loadData(store) : null,
    )
    .map((promise) => {
      let resolvedPromise;
      if (promise) {
        /* eslint-disable no-unused-vars */
        resolvedPromise = new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
        /* eslint-enable no-unused-vars */
      }
      return resolvedPromise;
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);
    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    return res.send(content);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000'); // eslint-disable-line no-console
});
