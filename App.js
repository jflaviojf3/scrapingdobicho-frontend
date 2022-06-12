import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, BackHandler, ScrollView, SafeAreaView, Dimensions } from 'react-native';

//import ResultadoTabela from './ResultadoTabela';

const { width, height } = Dimensions.get('window');

async function getResultadoDoDia(url) {
  let resultado = await fetch(url);
  let returnRes = await resultado.json()
  let selecionarResult = await returnRes.ResultadoDoDia
  let estacoes = await selecionarResult
  
  return await estacoes
}

async function atualizarResultado() {
  fetch('https://scrapingdobicho-backend.herokuapp.com/atualizar-resultado');
}

export default function App() {

  const [tituloJogo, setTituloJogo] = useState("Titulo Resultado");
  const [resultado, setResultado] = useState([])
  const [tituloResultado, setTituloResultado] = useState([])

  const url = 'https://scrapingdobicho-backend.herokuapp.com/resultado-dia'

  useEffect(() => {
    atualizarResultado()
  }
  )

  async function atualizaTitulo() {
    var resultadoDoDia = await getResultadoDoDia(url);
    delete resultadoDoDia.PTV
    var keysObj = Object.keys(resultadoDoDia)

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    for (var i = 0; i <= (keysObj.length - 1); i++) {
      if (keysObj[i] === "PTM") {
        resultadoDoDia.PTM.p = "PTM"
        resultadoDoDia.PTM.key = getRandomInt(1, 10000000)
      }
      if (keysObj[i] === "PT") {
        resultadoDoDia.PT.p = "PT"
        resultadoDoDia.PT.key = getRandomInt(1, 10000000)
      }
      if (keysObj[i] === "FED") {
        resultadoDoDia.FED.p = "FED"
        resultadoDoDia.FED.key = getRandomInt(1, 10000000)
      }
      if (keysObj[i] === "PTN") {
        resultadoDoDia.PTN.p = "PTN"
        resultadoDoDia.PTN.key = getRandomInt(1, 10000000)
      }
      if (keysObj[i] === "COR") {
        resultadoDoDia.COR.p = "COR"
        resultadoDoDia.COR.key = getRandomInt(1, 10000000)
      }
    }
    
    var valuesObj = Object.values(resultadoDoDia)
    setTituloJogo(valuesObj[0])
    setTituloResultado(keysObj)
    
    delete resultadoDoDia.tituloResultado
    valuesObj = Object.values(resultadoDoDia)
    setResultado(valuesObj)

  }

  var mapResult = () => {

    return (
      resultado.map((element, index) => {
        return (
          <View key={index} style={{ margin: 30 }}>

            <Text style={styles.resultadoTitu}>      {element.p}</Text>
            <Text style={styles.resultado}>     1º - {element.p1}</Text>
            <Text style={styles.resultado}>     2º - {element.p2}</Text>
            <Text style={styles.resultado}>     3º - {element.p3}</Text>
            <Text style={styles.resultado}>     4º - {element.p4}</Text>
            <Text style={styles.resultado}>     5º - {element.p5}</Text>
            <Text style={styles.resultado}>     6º - {element.p6}</Text>
            <Text style={styles.resultado}>     7º - {element.p7}</Text>
          </View>
        );
      }))
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <Text style={styles.titulo}>Resultado do Jogo do Bicho</Text>
        <Text style={styles.titulo}>{tituloJogo}</Text>
        <Text >{mapResult()}</Text>

        <TouchableOpacity
          onPress={() => atualizaTitulo()}
          style={styles.botaoTitulo}
        ><Text>{'Atualizar Resultado'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => BackHandler.exitApp()}
          style={styles.botaoTituloSair}
        ><Text>{'Fechar Resultado'}</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
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
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: "center",
  },
  botaoTitulo: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#FF0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 15,
  },
  botaoTituloSair: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#fab4c6",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 15,
  },
  resultadoTitu: {
    fontSize: 30,
    fontWeight: 'bold'
  }, resultado: {
    fontSize: 25,
  },
});
