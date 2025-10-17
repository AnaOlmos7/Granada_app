import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import FotoRuta from './FotoRuta'
import { TEMA_CLARO,TEMA_OSCURO } from '../themes/Temas'
import { Temas } from '../themes/Temas'
import {Ruta} from '../model/Tipos'

type mejoresRutasProps = {
    tema:Temas;
    listaRutas:Array<Ruta>
}

export default function Mejores({ tema,listaRutas}: mejoresRutasProps) {


  return (
    <>
    {
      listaRutas.map((ruta, index) =>
         <FotoRuta
        key={index}
        texto = {ruta.nombre}
        imagen = {ruta.imagen}
        tema={tema}/> )
    }
    </>
  )
}

const styles = StyleSheet.create({})