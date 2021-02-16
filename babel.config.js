module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          appnetwork: './src/network',
          appredux: './src/redux',
          appscreens: './src/screens',
          appserviceprovider: './src/serviceprovider',
          appservices: './src/services'
        }
      }
    ]
  ]
}
