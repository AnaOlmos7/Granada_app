import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FotoAlojamiento from './FotoAlojamiento'
import { Temas } from '../themes/Temas'
import {Alojamiento} from '../model/Tipos'

type mejoresAlojamientosProp = {
  tema:Temas;
  listaAlojamientos: Array <Alojamiento>;
  
}

export default function MejoresAlojamientos({tema,listaAlojamientos}:mejoresAlojamientosProp) {
  
  return (

          <View style={styles.contenedorFotosAlojamientos}>

 
            
            {
              listaAlojamientos.map((alojamiento, index) => 
              <View key={index}style={styles.contenedorAlojamiento}>  
              <FotoAlojamiento  
              imagen = {alojamiento.imagen}
              /> 
            
            </View> 
          )}
       </View>
          
  )
}

const styles = StyleSheet.create({
    
contenedorFotosAlojamientos: {
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  gap:5,
  margin: 0,
  marginBottom: 15
},

fotoAlojamiento: {
  width: "100%",
  height: "100%"
},

contenedorAlojamiento: {
  width: "49%",
  aspectRatio: 1
}
})