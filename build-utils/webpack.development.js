const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => ({
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // }
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    // Copy empty ServiceWorker so install doesn't blow up
    // new CopyWebpackPlugin(['src/sw.js'])
  ],
  devtool: 'source-map'
});
