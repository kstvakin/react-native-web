import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import WebView from "@/features/home/platform/web";

const Home = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#ffffff',
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      {Platform.OS === 'web' && <WebView />}
      {Platform.OS !== 'web' && <></>}
    </SafeAreaView>
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
export default Home;
