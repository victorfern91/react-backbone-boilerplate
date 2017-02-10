let HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    // config webpack plugins
    HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
        template: __dirname + '/app/index.html',
        filename: 'index.html',
        inject: 'body'
    });

const webpackConfig = {
    entry: ['./app/index.js'],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-0'] // stage-0 enable decorators and async/await features
            }
        }]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    plugins: [HTMLWebpackPluginConfig]
};

if (process.env.NODE_ENV === 'production') {
    // uglify code
    webpackConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            }
        })
    );
    // this used to compile React and another libs as production code
    webpackConfig.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    );
} else {
    // see source maps in development
    webpackConfig.devtool = 'cheap-module-source-map';
}

module.exports = webpackConfig;
