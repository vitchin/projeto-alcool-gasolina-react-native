import React from "react"
import {View, Text, StyleSheet} from "react-native"

export default function Title(){

return(
<View>
<Text style={styles.titulo}>Alcool ou Gasolina</Text>
</View>
);
}
const styles = StyleSheet.create({
  titulo:{
    marginTop: 20,
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    color: '#fff',
  },

  });