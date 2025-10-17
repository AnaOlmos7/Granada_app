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
import { CarruselT } from './model/Tipos'





export default function App() {

 
  const tema =  useColorScheme() 
  const temaActivo = tema === "dark" ? TEMA_OSCURO : TEMA_CLARO 

  useFonts({
    "bebasNeue": require("./assets/BebasNeue-Regular.ttf")
  })

  const rutas = [

    {
      id: 1,
      nombre:"Albaicín",
      imagen:require("./assets/mejores1.jpg")
    },

    {
      id: 2,
      nombre:"Sacromonte",
      imagen:require("./assets/mejores2.jpg")
    },

   {
      id: 3,
      nombre:"El centro",
      imagen:require("./assets/mejores3.jpg")
    },

  {
      id:4,    
      nombre:"San Nicolás",
      imagen:require("./assets/mejores4.jpg")
    }
     
  ]


  const alojamientos = [

    {
      id:1,
      imagen:require("./assets/alojamiento1.jpg")
    },

      {
      id:1,
      imagen:require("./assets/alojamiento2.jpg")
    },

      {
      id:1,
      imagen:require("./assets/alojamiento3.jpg")
    },


      {
      id:1,
      imagen:require("./assets/alojamiento4.jpg")
    },

  ]

  const fotosCarrusel: Array<CarruselT> = [

    {
      id: 1,
      imagen: require("./assets/actividad1.jpg")
    },

    
    {
      id: 2,
      imagen: require("./assets/actividad2.jpg")
    },

    
    {
      id: 3,
      imagen: require("./assets/actividad3.jpg")
    },

    
    {
      id: 4,
      imagen: require("./assets/actividad4.jpg")
    },

    
    {
      id: 5,
      imagen: require("./assets/actividad5.jpg")
    }
  ] 

  return (
    
    <View style={[styles.contenedorPrincipal, { backgroundColor: temaActivo.colorFondo }]}>
        <ScrollView>
        <Image
          source={require("./assets/granada_dark.jpg")}
          contentFit='fill'
          style={styles.granadaD}
        />

      <Titulo texto="¿Qué hacer en Granada?" tema={temaActivo}></Titulo>
        
      <Carrusel tema={temaActivo} listaFotos={fotosCarrusel}/>
      
       <Titulo texto="Las mejores rutas" tema={temaActivo}></Titulo>

        <Mejores tema={temaActivo} listaRutas={rutas}/>

        <Titulo texto="Los mejores alojamientos" tema={temaActivo}></Titulo>
          <MejoresAlojamientos tema={temaActivo} listaAlojamientos={alojamientos}/>
      
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