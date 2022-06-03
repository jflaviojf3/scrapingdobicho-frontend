import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ResultadoTabela(props) {
    const rEstacao = JSON.stringify(props);
    console.log("Resultado da Estacao "+rEstacao)
    
    
    
    return(
    <View>
        <Text style={styles.tituloResult}>{rEstacao.cor}</Text>
        <Text style={styles.Resulta}>1º - {rEstacao.COR}</Text>
        <Text style={styles.Resulta}>2º - </Text>
        <Text style={styles.Resulta}>3º - </Text>
        <Text style={styles.Resulta}>4º - </Text>
        <Text style={styles.Resulta}>5º - </Text>
        <Text style={styles.Resulta}>6º - </Text>
        <Text style={styles.Resulta}>7º - </Text>
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