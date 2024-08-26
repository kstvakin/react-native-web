import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WebView = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSize}>React Native Web App Example</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textSize: {
    fontSize: 24,
  },
});
export default WebView;
