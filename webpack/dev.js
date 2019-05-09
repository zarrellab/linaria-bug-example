export default {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: { historyApiFallback: true },
  module: {
    rules: [
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              url: false,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
}
