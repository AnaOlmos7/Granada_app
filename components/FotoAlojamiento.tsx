import { StyleSheet, View } from 'react-native'
import { Image } from 'expo-image'
import React from 'react'

export default function FotoAlojamiento({imagen}:
    {imagen: any}
) {
  return (
        <Image 
        source={imagen}
        contentFit='cover'
        style={styles.fotoAlojamiento}/>
    
  )
}

const styles = StyleSheet.create({

fotoAlojamiento: {
  width: "100%",
  height: "100%"
}
})