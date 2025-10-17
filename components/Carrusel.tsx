import { StyleSheet, Text, ScrollView, View, useColorScheme, ImageSourcePropType } from 'react-native'
import { Image } from 'expo-image'
import React from 'react'
import Titulo from './Titulo'
import { TEMA_OSCURO, TEMA_CLARO, Temas } from '../themes/Temas'
import { CarruselT } from '../model/Tipos'

      type carruselProps = {
        tema: Temas;
        listaFotos:Array<CarruselT>
      }

export default function Carrusel({tema,listaFotos}: carruselProps) {
 
 
  return (

<View style={styles.contenedorSecundario}>

          <ScrollView horizontal={true}
          style={styles.fotoCarrusel}
            >

            { listaFotos.map((foto,index) => (
            <Image
            key={index}
            source={foto.imagen}
            contentFit='cover'
            style={styles.fotoCarrusel}
            /> 
          ))}
          
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