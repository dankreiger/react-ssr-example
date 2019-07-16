import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';

export default (): Store => {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    return store;
};
