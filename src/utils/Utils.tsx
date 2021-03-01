import React from 'react'
import './Extends'

export const CPF = {
  tirar: (cpf: string) => {
    return cpf.replace(/\.|-|_/g, '')
  },

  adicionar: (cpf: string) => {
    if(cpf == undefined) return 'CPF_INVALIDO'
    if(cpf.length != 11) return 'CPF_INVALIDO'
    cpf = cpf.addCharAt(3, '.')
    cpf = cpf.addCharAt(7, '.')
    cpf = cpf.addCharAt(11, '-')
    return cpf
  }
}

export const Data = {
  tirar: (data: string) => {
    return data.replace(/[_/\//]/g, '')
  },
}

export const toLowerCase = (str: string) => {
  if(typeof str == 'string') str = str.toLowerCase()
  return str
}

export const vazio = () => {
  return <></>
}