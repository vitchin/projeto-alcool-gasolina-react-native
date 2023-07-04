import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");

  function resultado(){
    if(gasolina < alcool){
      alert("Melhor abastecer com gasolina");
    } else{
      alert("Melhor abastecer com alcool");
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Alcool ou Gasolina</Text>

      <Text style={styles.tituloCampo}>Preço do litro do alcool:</Text>
      
      <TextInput 
      style={styles.input} 
      placeholder="Preço por litro. Ex: R$ 5.00 "
      value={alcool} onChangeText={(alcool)=> setAlcool
      (alcool)}/>

      <Text style={styles.tituloCampo}>Preço do litro da gasolina:</Text>

      <TextInput 
      style={styles.input} 
      placeholder="Preço por litro. Ex: R$ 5.00" 
      value={gasolina} onChangeText={(gasolina)=> 
      setGasolina(gasolina)}/>

      <TouchableOpacity 
      style={styles.botao} onPress={resultado}>
      
      <Text style={styles.textoBotao}>CALCULAR</Text>
      
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: '#545456'
  },
  titulo:{
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  tituloCampo:{
    margin: 5,
    fontSize:16,
    fontWeight: 500,
    color: '#fff',
  },
  botao:{
    margin: 5,
    borderRadius: 100,
    alignItems:'center',
    backgroundColor: '#41AFF4'
  },
  textoBotao:{
    padding: 15,
    color:'#FFF',
    fontSize: 16,
    fontWeight: 500
  },

  input: {
    margin: 5,
    padding: 10,
    backgroundColor: '#DFDFDF',
    color:'#000',
    borderRadius: 2,
  },
});
