import { StyleSheet, Text, ScrollView, View, useColorScheme } from 'react-native'
import { Image } from 'expo-image'
import React from 'react'
import Titulo from './Titulo'
import { TEMA_OSCURO, TEMA_CLARO } from '../themes/Temas'

export default function Carrusel() {

      const tema =  useColorScheme() 
      const temaActivo = tema === "dark" ? TEMA_OSCURO : TEMA_CLARO 

  return (

<View style={styles.contenedorSecundario}>
          <Titulo texto="¿Qué hacer en Granada?" tema={temaActivo}></Titulo>
          <ScrollView horizontal={true}>
            <Image
              source={require("../assets/actividad1.jpg")}
              contentFit='fill'
              style={styles.fotoCarrusel}
            />
           

            <Image
              source={require("../assets/actividad2.jpg")}
              contentFit='fill'
              style={styles.fotoCarrusel}
            />
            

            <Image
              source={require("../assets/actividad3.jpg")}
              contentFit='fill'
              style={styles.fotoCarrusel}
            />
       

            <Image
              source={require("../assets/actividad4.jpg")}
              contentFit='fill'
              style={styles.fotoCarrusel}
            />
           

            <Image
              source={require("../assets/actividad5.jpg")}
              contentFit='fill'
              style={styles.fotoCarrusel}
            />
           
        </ScrollView>
        </View>
  )
}

const styles = StyleSheet.create ({

  contenedorSecundario: {
    flex: 1,
    marginHorizontal: 10,
    padding: 5,
    justifyContent:"center",
    alignItems: "center"
    

  },

  fotoCarrusel: {
    width: 250,
    height: 300,
    marginRight: 10,
    borderRadius: 10

  },

})