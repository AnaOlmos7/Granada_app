import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Temas } from '../themes/Temas'


type TituloProps = {
  texto: string;
  tema:Temas;
}

export default function Titulo({ texto,tema}:TituloProps){
  return (
    
      <Text style= {[styles.titulo, { color: tema.colorTitulo}]}>
       {texto}
        </Text>
  )
}

const styles = StyleSheet.create({
    titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
})