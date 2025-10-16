import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Titulo({ texto,tema}: { texto: string; tema: any}) {
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