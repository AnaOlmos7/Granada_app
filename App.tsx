import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'



export default function App() {

  const COLOR_FONDO = "#121212"
  const COLOR_TITULO = "FFDD99"
  const COLOR_TEXTO = "ffffff" 


  return (
    <ScrollView>
    <View style={[styles.contenedorPrincipal,{backgroundColor:COLOR_FONDO}]}>
      <Image
      source={require("./assets/granada_dark.jpg")}
      contentFit='fill'
      style={styles.granadaD}
      >
      </Image>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    flexDirection: "column"
  },

  granadaD:{
    width: "100%",
    height: 250
  }
})