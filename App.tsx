import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, ImageBackground } from 'expo-image'
import { useFonts } from 'expo-font'



export default function App() {

  const COLOR_FONDO = "#121212"
  const COLOR_TITULO = "#FFDD99"
  const COLOR_TEXTO = "#ffffff" 
  useFonts({
    "bebasNeue": require("./assets/BebasNeue-Regular.ttf")
  })


  return (
    
    <View style={[styles.contenedorPrincipal,{backgroundColor:COLOR_FONDO}]}>
      <ScrollView>
      <Image
      source={require("./assets/granada_dark.jpg")}
      contentFit='fill'
      style={styles.granadaD}
      >
      </Image>
      

    <View style= {styles.contenedorSecundario}>
      <Text style= {[styles.titulo,{color:COLOR_TITULO}]}>¿Qué hacer en Granada?</Text>
        <ScrollView horizontal={true}>
   <Image
      source={require("./assets/actividad1.jpg")}
      contentFit='fill'
      style={styles.fotoCarrusel}
      >
      </Image>

      <Image
      source={require("./assets/actividad2.jpg")}
      contentFit='fill'
      style={styles.fotoCarrusel}
      >
      </Image>

      <Image
      source={require("./assets/actividad3.jpg")}
      contentFit='fill'
      style={styles.fotoCarrusel}
      >
      </Image>

      <Image
      source={require("./assets/actividad4.jpg")}
      contentFit='fill'
      style={styles.fotoCarrusel}
      >
      </Image>

      <Image
      source={require("./assets/actividad5.jpg")}
      contentFit='fill'
      style={styles.fotoCarrusel}
      >
      </Image>
      </ScrollView>
      </View>
      
       <Text style= {[styles.titulo,{color:COLOR_TITULO}]}>Las mejores rutas</Text>
        <ImageBackground
        source={require("./assets/mejores1.jpg")}
        contentFit='fill'
        style={styles.fotoRuta}
      ><Text style= {[styles.textoFoto,{color:COLOR_TEXTO}]}>Albaicín</Text></ImageBackground>

       <ImageBackground
        source={require("./assets/mejores2.jpg")}
        contentFit='fill'
        style={styles.fotoRuta}
      ><Text style= {[styles.textoFoto,{color:COLOR_TEXTO}]}>Sacromonte</Text></ImageBackground>

      <ImageBackground
        source={require("./assets/mejores3.jpg")}
        contentFit='fill'
        style={styles.fotoRuta}
      
      ><Text style= {[styles.textoFoto,{color:COLOR_TEXTO}]}>El centro</Text></ImageBackground>

    </ScrollView>
    </View>
    
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
  },

  contenedorSecundario: {
    flex: 1,
    marginHorizontal: 10,
    padding: 5,
    justifyContent:"center",
    alignItems: "center"
    

  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20
  },

  fotoCarrusel: {
    width: 250,
    height: 300,
    marginRight: 10,
    borderRadius: 10

  },

  fotoRuta:{
    width: "100%",
    height: 200,
    marginVertical: 5
  },

  textoFoto:{
    alignSelf: "center",
    fontSize: 48,
    fontFamily:"bebasNeue",
    textShadowColor: "#000", // para la sombra del texto hay que poner textShadowColor y
    textShadowOffset: {        // textShadowOffset, con text delante y la elevacion
	                width: 2,
	                height: 2,
},
textShadowRadius: 5
  }
  
})