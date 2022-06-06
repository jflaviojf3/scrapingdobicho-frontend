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
  return await estacoes
}


export default function App() {

  const [tituloJogo, setTituloJogo] = useState("Titulo Resultado");
  const [resultado, setResultado] = useState([])
  const [tituloResultado, setTituloResultado] = useState([])

  const url = 'https://scrapingdobicho-backend.herokuapp.com/resultado-dia'

  async function atualizaTitulo() {
    var resultadoDoDia = 
    /*{
      "tituloResultado": "Sexta-Feira, 03 de Junho de 2022",
      "PTM": {
        "p1": "5999-25",
        "p2": "9613-4",
        "p3": "7971-18",
        "p4": "2686-22",
        "p5": "3406-2",
        "p6": "9675-19",
        "p7": "668-17"
      },
      "PT": {
        "p1": "4431-8",
        "p2": "6031-8",
        "p3": "5670-18",
        "p4": "4161-16",
        "p5": "6506-2",
        "p6": "6799-25",
        "p7": "723-6"
      },
      "PTV": {
        "p1": "1587-22",
        "p2": "7717-5",
        "p3": "2220-5",
        "p4": "8308-2",
        "p5": "4279-20",
        "p6": "4111-3",
        "p7": "246-12"
      },
      "PTN": {
        "p1": "9344-11",
        "p2": "6048-12",
        "p3": "8691-23",
        "p4": "4858-15",
        "p5": "7951-13",
        "p6": "6892-23",
        "p7": "512-3"
      },
      "COR": {
        "p1": "7402-1",
        "p2": "6496-24",
        "p3": "6077-20",
        "p4": "0096-24",
        "p5": "2763-16",
        "p6": "2834-9",
        "p7": "083-21"
      }
    }*/

    await getResultadoDoDia(url);
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
    setResultado(valuesObj)

  }

  var mapResult = () => {
    
    return (
      resultado.map(element => {
        return (
          <View key={element.key} style={{ margin: 30 }}>

            <Text style={styles.resultadoTitu}>   {element.p}</Text>
            <Text style={styles.resultado}>   |1º {element.p1}</Text>
            <Text style={styles.resultado}>   |2º {element.p2}</Text>
            <Text style={styles.resultado}>   |3º {element.p3}</Text>
            <Text style={styles.resultado}>   |4º {element.p4}</Text>
            <Text style={styles.resultado}>   |5º {element.p5}</Text>
            <Text style={styles.resultado}>   |6º {element.p6}</Text>
            <Text style={styles.resultado}>   |7º {element.p7}</Text>
          </View>
        );
      }))
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultado do Jogo do Bicho</Text>
      <Text style={styles.titulo}>{tituloJogo}</Text>
      <Text style={styles.resultado}>{mapResult()}</Text>
      <TouchableOpacity
        onPress={() => atualizaTitulo()}
        style={styles.botaoTitulo}
      ><Text>{'Atualizar Resultado'}</Text>
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
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#FF0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 15,
  }, resultadoTitu: {
    fontSize: 20,
    fontWeight: 'bold'
  }, resultado: {
    fontSize: 25,
  },
});
