import React from 'react'
import {Container} from './styles'

interface IErroProps {
  titulo: string,
  desc: string
}

const Erro: React.FC<IErroProps> = (props) => {
  return (
    <Container>
      <h2>{props.titulo}</h2>
      <h4>{props.desc}</h4>
      {props.children}
    </Container>
  )
}

export default Erro