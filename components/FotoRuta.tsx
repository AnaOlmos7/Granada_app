import { ImageSource, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'expo-image'
import { Temas } from '../themes/Temas';


type fotoRutaProps= {
    texto:string;
    imagen:ImageSourcePropType;
    tema: Temas;
}

export default function FotoRuta({texto,imagen,tema}: fotoRutaProps) {
    
  return (
     <ImageBackground
              source={imagen}
              style={styles.fotoRuta}>
              <Text style={[styles.textoFoto, { color:tema.colorTextoFoto}]}>
                {texto}
                </Text>
            </ImageBackground>
            
    

  )
}

const styles = StyleSheet.create({

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
