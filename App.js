import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import ResultadoTabela from './ResultadoTabela';

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
  const [resultado, setResultado] = useState({
    "COR": {
      "p1": "5469-18",
      "p2": "5238-10",
      "p3": "8003-1",
      "p4": "9675-19",
      "p5": "8905-2",
      "p6": "7290-23",
      "p7": "646-12",
    },
    "PT": {
      "p1": "2647-12",
      "p2": "0559-15",
      "p3": "3866-17",
      "p4": "2324-6",
      "p5": "1159-15",
      "p6": "0555-14",
      "p7": "479-20",
    },
    "PTM": {
      "p1": "0426-7",
      "p2": "6406-2",
      "p3": "0344-11",
      "p4": "7304-1",
      "p5": "3699-25",
      "p6": "8179-20",
      "p7": "728-7",
    },
    "PTN": {
      "p1": "6787-22",
      "p2": "2930-8",
      "p3": "2518-5",
      "p4": "4651-13",
      "p5": "5341-11",
      "p6": "2227-7",
      "p7": "885-22",
    },
    "PTV": {
      "p1": "2657-15",
      "p2": "5217-5",
      "p3": "5661-16",
      "p4": "3585-22",
      "p5": "5482-21",
      "p6": "2602-1",
      "p7": "861-16",
    },
    "tituloResultado": "Quinta-Feira, 02 de Junho de 2022",
  })

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
      <ResultadoTabela resultadoEstacao = {resultado} />
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
