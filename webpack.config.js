module.exports = {
  entry: "./client/app.jsx",
  output: {
    path: "dist/js",
    filename: "bundle.js",
    publicPath: "http://127.0.1.1:2992/js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        include: /client/
      }
    ]
  }
};
