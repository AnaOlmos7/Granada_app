import { ImageSourcePropType, StyleSheet, View } from 'react-native'
import { Image } from 'expo-image'
import React from 'react'

type fotoAlojamientoProp = {
    imagen: ImageSourcePropType;
}

export default function FotoAlojamiento({imagen}: fotoAlojamientoProp) {
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