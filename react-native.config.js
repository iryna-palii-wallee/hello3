module.exports = {
  dependencies: {
    '@callstack/react-native-brownfield': {
      platforms: {
        android: {
          sourceDir: '../node_modules/@callstack/react-native-brownfield/android',
          packageImportPath: 'import com.callstack.reactnativebrownfield.ReactNativeBrownfieldPackage;',
          packageInstance: 'new ReactNativeBrownfieldPackage()',
        },
      },
    },
  },
};
