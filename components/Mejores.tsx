import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import FotoRuta from './FotoRuta'
import { TEMA_CLARO,TEMA_OSCURO } from '../themes/Temas'


export default function Mejores({ tema }:
{ tema: any}) {

const temaActivo = tema === "dark" ? TEMA_OSCURO : TEMA_CLARO 

  return (
    <>
  <FotoRuta
          texto="Albaicin"
          imagen={require("../assets/mejores1.jpg")}
          tema={temaActivo}     
         />
  
          <FotoRuta
          texto="Sacromonte"
          imagen={require("../assets/mejores2.jpg")}
          tema={temaActivo}     
         />
  
         <FotoRuta
          texto="El centro"
          imagen={require("../assets/mejores3.jpg")}
          tema={temaActivo}     
         />
    </>
  )
}

const styles = StyleSheet.create({})