import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

async function getResultadoDoDia(url) {
  let resultado = await fetch(url);
  let returnRes = await resultado.json()
  let selecionarResult = await returnRes.ResultadoDoDia

  let titulo = await selecionarResult.tituloResultado
  console.log(titulo)
  console.log(typeof titulo + "1")
  return await titulo
}


export default function App() {

  const [tituloJogo, setTituloJogo] = useState(null);
  const url = 'https://scrapingdobicho-backend.herokuapp.com/resultado-dia'

  function atualizaTitulo (){
    let tituloRes = getResultadoDoDia(url);
    console.log(typeof tituloRes + "2")
  }

  useEffect(() => {
    let titleResult = 'Titulo Resultado'
    //titleResult = getResultadoDoDia(url);
    setTituloJogo(titleResult)
  })

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultado do Jogo do Bicho</Text>
      <Text style={styles.titulo}>{tituloJogo}</Text>
      <TouchableOpacity
        onPress={() => atualizaTitulo()}
        title={'Adicionar Data2'}
      >
        <Text>{'Adicionar Data'}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
