import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

async function getResultadoDoDia(url) {
  let resultado = await fetch(url);
  let returnRes = await resultado.json()
  let selecionarResult = await returnRes.ResultadoDoDia

  let estacoes = await selecionarResult
  let titulo = await selecionarResult.tituloResultado
  console.log(estacoes)

  console.log(typeof estacoes + "1")
  return await estacoes
}


export default function App() {

  const [tituloJogo, setTituloJogo] = useState("Titulo Resultado");
  const url = 'https://scrapingdobicho-backend.herokuapp.com/resultado-dia'

  async function atualizaTitulo (){
    let tituloRes = await getResultadoDoDia(url);
    console.log(typeof  tituloRes.tituloResultado + "2")
    setTituloJogo(tituloRes.tituloResultado)
  }

  useEffect(() => {
    //let tituloRes = await getResultadoDoDia(url);
    //setTituloJogo(tituloRes.tituloResultado)
  })

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultado do Jogo do Bicho</Text>
      <Text style={styles.titulo}>{tituloJogo}</Text>
      <TouchableOpacity
        onPress={() => atualizaTitulo()}
        title={'Adicionar Data2'}
        style={styles.botaoTitulo}
      >
        <Text>{'Atualizar Data'}</Text>
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
  },
  botaoTitulo: {
    width: '100%',
    height: '100%',
    fontSize: 10,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
