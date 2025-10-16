import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FotoAlojamiento from './FotoAlojamiento'


export default function MejoresAlojamientos() {
  return (
    <View style={styles.contenedorFotosAlojamientos}>

            <View style={styles.contenedorAlojamiento}>  
              <FotoAlojamiento imagen={require("../assets/alojamiento1.jpg")}
              />
            </View>  
           
          
            <View style={styles.contenedorAlojamiento}>  
              <FotoAlojamiento imagen={require("../assets/alojamiento2.jpg")}
              />
            </View>  

            
            <View style={styles.contenedorAlojamiento}>  
              <FotoAlojamiento imagen={require("../assets/alojamiento3.jpg")}
              />
            </View>  

            
            <View style={styles.contenedorAlojamiento}>  
              <FotoAlojamiento imagen={require("../assets/alojamiento4.jpg")}
              />
            </View>  
      
          
      
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