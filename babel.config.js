module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // Re-write paths to import only the modules needed by the app
  plugins: [
    'react-native-web',
    [
      'module-resolver',
      {
        alias: {
          '^react-native$': 'react-native-web',
        },
      },
    ],
  ],
};
