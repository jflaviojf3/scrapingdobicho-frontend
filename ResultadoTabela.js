import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ResultadoTabela(props) {
    const rEstacao = Object.values(props)
    //var tituloResul = rEstacao[0];
    //console.log(rEstacao)
    
    
    return(
    <View>
        <Text style={styles.tituloResult}></Text>
        <Text style={styles.Resulta}>1º - {rEstacao.p1}</Text>
        <Text style={styles.Resulta}>2º - {rEstacao.p2}</Text>
        <Text style={styles.Resulta}>3º - {rEstacao.p3}</Text>
        <Text style={styles.Resulta}>4º - {rEstacao.p4}</Text>
        <Text style={styles.Resulta}>5º - {rEstacao.p5}</Text>
        <Text style={styles.Resulta}>6º - {rEstacao.p6}</Text>
        <Text style={styles.Resulta}>7º - {rEstacao.p7}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    tituloResult: {
      fontSize: 12,
      fontWeight: 'bold'
    },
    Resulta: {
      fontSize: 14,
      fontWeight: 'bold',
    }
  });