module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
