import * as webpack from 'webpack';
import * as path from 'path';

const config: webpack.Configuration = {
  entry: './app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }, 
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /(\.js)|(\.ts)$/,
        exclude: /node_modules\//,
        use: [
          {loader: 'ts-loader'},
        ]
      }
    ]
  }
};

export default config;
