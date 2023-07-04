import React, {useState} from "react";
import {View, TextInput, Text, Button, StyleSheet} from "react-native";

export default function Form(){

  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");

  function resultado(){
    if(gasolina < alcool){
      alert("Melhor abastecer com gasolina");
    } else if(gasolina > alcool){
      alert("Melhor abastecer com alcool");
    } else{
      alert("Valor inválido ou não inserido");
    }
  }

return(

<View>
<View>

<Text style={styles.tituloCampo}>Preço do alcool:</Text>

<TextInput placeholder= "Preço por litro. Ex: 5.75" keyboardType="numeric"
style={styles.input} 
value={alcool} 
onChangeText={(alcool)=> setAlcool(alcool)}/>

<Text 
style={styles.tituloCampo}>
Preço da gasolina:</Text>

<TextInput placeholder= "Preço por litro. Ex: 5.75" keyboardType="numeric"
style={styles.input}
value={gasolina} 
onChangeText={(gasolina)=> setGasolina(gasolina)}/>

<Button 
style={styles.botao}
title={"Calcular"} 
onPress={resultado}/>

</View>
</View>
);
}
const styles = StyleSheet.create({
  tituloCampo:{
    margin: 5,
    fontSize:16,
    fontWeight: 500,
    color: '#fff',
  },
  input: {
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#DFDFDF',
    color:'#000',
    borderRadius: 2,
  },
});
