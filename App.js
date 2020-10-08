import React from 'react';
import { Text, StatusBar, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={ styles.container } >
      <StatusBar barStyle="dark-content" />
      <Text>Hello Felps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
