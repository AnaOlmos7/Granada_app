import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Image, ImageBackground } from 'expo-image'
import { useFonts } from 'expo-font'
import { TEMA_CLARO, TEMA_OSCURO } from './themes/Temas'
import Titulo from './components/Titulo'
import Carrusel from './components/Carrusel'
import FotoRuta from './components/FotoRuta'
import Mejores from './components/Mejores'
import FotoAlojamiento from './components/FotoAlojamiento'
import MejoresAlojamientos from './components/MejoresAlojamientos'



export default function App() {

 
  const tema =  useColorScheme() 
  const temaActivo = tema === "dark" ? TEMA_OSCURO : TEMA_CLARO 
  useFonts({
    "bebasNeue": require("./assets/BebasNeue-Regular.ttf")
  })


  return (
    
    <View style={[styles.contenedorPrincipal, { backgroundColor: temaActivo.colorFondo }]}>
        <ScrollView>
        <Image
          source={require("./assets/granada_dark.jpg")}
          contentFit='fill'
          style={styles.granadaD}
        />
        
      <Carrusel/>
      
       <Titulo texto="Las mejores rutas" tema={temaActivo}></Titulo>
        <Mejores tema={temaActivo}/>

        <Titulo texto="Los mejores alojamientos" tema={temaActivo}></Titulo>

          <MejoresAlojamientos/>
      
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


  
})