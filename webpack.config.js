const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const paths = {
    src: path.resolve(__dirname, "src"),
    dist: path.resolve(__dirname, "dist"),
};

const env = process.env.NODE_ENV;
const __DEV__ = env === "development";
// const __PRODUCTION__ = env === "production";

const development = {
    context: paths.src,
    devtool: "cheap-module-source-map",
    entry: {
        app: ["react-hot-loader/patch", "./app/index"]
    },
    output: {
        path: paths.dist,
        publicPath: "/",
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loaders: ["react-hot-loader/webpack", "awesome-typescript-loader"]
            },
            {
                test: /\.(scss|sass)$/,
                use: [{loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader"}],
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html",
            favicon: "./favicon.ico",
            inject: true
        }),
        new CopyWebpackPlugin([{from: "assets", to: "assets"}])
    ],
    devServer: {
        hot: true,
        port: 3000,
        historyApiFallback: true
    }
};

const extractStyles = new ExtractTextPlugin({filename: "[name].[chunkhash].css"});

const production = {
    context: paths.src,
    devtool: "source-map",
    entry: {
        app: "./app/index"
    },
    output: {
        path: paths.dist,
        publicPath: "/",
        filename: "[name].[chunkhash].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                loader: ["awesome-typescript-loader"]
            },
            {
                test: /\.(scss|sass)$/,
                use: extractStyles.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(env)
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            sourceMap: true,
            compress: {
                sequences: true,
                booleans: true,
                loops: true,
                unused: true,
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
            favicon: "./favicon.ico",
            inject: true,
            minify: {
                collapseWhitespace: true,
                preserveLineBreaks: false,
            }
        }),
        extractStyles,
        new CopyWebpackPlugin([{from: "assets", to: "assets"}])
    ]
};

if (__DEV__) {
    module.exports = development;
} else {
    module.exports = production;
}
