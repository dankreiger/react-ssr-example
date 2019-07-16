module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/,
            },
            { test: /\.tsx?$/, loader: 'ts-loader' },
        ],
    },
};
