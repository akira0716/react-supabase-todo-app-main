const HtmlWebpackPlugin = require("html-webpack-plugin");
const workBoxWebpackPlugin = require("workbox-webpack-plugin");
const OUTPUT_PATH = `${__dirname}/dist`;
const CopyWebpackPlugin = require("copy-webpack-plugin");
const dotenv = require("dotenv");
const webpack = require("webpack");

const env = dotenv.config().parsed;

module.exports = {
  mode: "development",
  entry: {
    main: __dirname + "/src/main.tsx",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/],
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    modules: [__dirname + "/node_modules"],
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
    }),
    new workBoxWebpackPlugin.GenerateSW({
      swDest: OUTPUT_PATH + "/service-worker.js",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public", to: "." }],
    }),
    env !== undefined
      ? new webpack.DefinePlugin({
          "process.env": JSON.stringify(process.env),
        })
      : new webpack.DefinePlugin({
          "process.env.REACT_APP_SUPABASE_URL": JSON.stringify(
            process.env.REACT_APP_SUPABASE_URL
          ),
          "process.env.REACT_APP_SUPABASE_ANON_KEY": JSON.stringify(
            process.env.REACT_APP_SUPABASE_ANON_KEY
          ),
        }),
  ],
  devServer: {
    static: {
      directory: __dirname + "/dist",
    },
    port: 8080,
  },
};
