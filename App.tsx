import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {

  const COLOR_FONDO = "#121212"
  const COLOR_TITULO = "FFDD99"
  const COLOR_TEXTO = "ffffff" 


  return (
    <View style={[styles.contenedorPrincipal,{backgroundColor:COLOR_FONDO}]}>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    flexDirection: "column"
  }
})