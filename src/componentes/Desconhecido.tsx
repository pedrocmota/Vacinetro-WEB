import React, {memo} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Container from './Container'
import Button from './Button/Button'

interface IDesconhecidoProps {
  titulo: string,
  returnLink: string
}

const Desconhecido: React.FC<IDesconhecidoProps> = (props) => {
  return (
    <Container width={380} height={180}>
      <NaoEncontrado>
        <div className="titulo h1">{props.titulo}</div>
        <Button tipo="primary" marginTop={30}>
          <Link to={props.returnLink}>Voltar</Link>
        </Button>
      </NaoEncontrado>
    </Container>
  )
}

const NaoEncontrado = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 30px;
  .titulo {
    text-align: center;
    color: ${props => props.theme.paginas.busca_404.foreground};
  }
`

export default memo(Desconhecido)