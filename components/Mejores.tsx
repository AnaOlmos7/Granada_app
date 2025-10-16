import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import FotoRuta from './FotoRuta'
import { TEMA_CLARO,TEMA_OSCURO } from '../themes/Temas'
import { Temas } from '../themes/Temas'

type mejoresRutasProps = {
    tema:Temas;
}

export default function Mejores({ tema }: mejoresRutasProps) {


  return (
    <>
  <FotoRuta
          texto="Albaicin"
          imagen={require("../assets/mejores1.jpg")}
          tema={tema}     
         />
  
          <FotoRuta
          texto="Sacromonte"
          imagen={require("../assets/mejores2.jpg")}
          tema={tema}     
         />
  
         <FotoRuta
          texto="El centro"
          imagen={require("../assets/mejores3.jpg")}
          tema={tema}     
         />
    </>
  )
}

const styles = StyleSheet.create({})