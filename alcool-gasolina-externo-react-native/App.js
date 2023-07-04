import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Title from "./components/Title/index"
import Main from "./components/Main/index"

import { Card } from 'react-native-paper';

export default function App() {

return (
<View style={styles.container}>
<Title/>
<Main/>
</View>

);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: '#545456'
  },
});
