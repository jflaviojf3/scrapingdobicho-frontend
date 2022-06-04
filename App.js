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
  //console.log(typeof  estacoes)
  return await estacoes
}


export default function App() {

  const [tituloJogo, setTituloJogo] = useState("Titulo Resultado");
  const [resultado, setResultado] = useState([])

  const url = 'https://scrapingdobicho-backend.herokuapp.com/resultado-dia'

  async function atualizaTitulo() {
    var resultadoDoDia = {
      "tituloResultado": "Sexta-Feira, 04 de Junho de 2022",
      "PTM": {
        "p1": "5999-66",
        "p2": "9613-4",
        "p3": "7971-18",
        "p4": "2686-22",
        "p5": "3406-2",
        "p6": "9675-19",
        "p7": "668-17"
      }
    }

    //await getResultadoDoDia(url);
    var valuesObj = Object.values(resultadoDoDia)
    var keysObj = Object.keys(resultadoDoDia)
    setTituloJogo(valuesObj[0])
    setResultado(valuesObj)
  }

  var mapResult = () => {
    return (
      resultado.map(element => {
        return (
          <View key={element.key} style={{ margin: 10 }}>
            <Text>1º - {element.p1}</Text>
            <Text>2º - {element.p2}</Text>
            <Text>3º - {element.p3}</Text>
            <Text>4º - {element.p4}</Text>
            <Text>5º - {element.p5}</Text>
            <Text>6º - {element.p6}</Text>
            <Text>7º - {element.p7}</Text>
          </View>
        );
      }))
  }
  useEffect(() => {
    //let tituloRes = await getResultadoDoDia(url);
    //setTituloJogo(tituloRes.tituloResultado)
  })

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultado do Jogo do Bicho</Text>
      <Text style={styles.titulo}>{tituloJogo}</Text>
      <Text>{mapResult()}</Text>
      <TouchableOpacity
        onPress={() => atualizaTitulo()}
        style={styles.botaoTitulo}
      ><Text>{'Atualizar Data'}</Text>
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
