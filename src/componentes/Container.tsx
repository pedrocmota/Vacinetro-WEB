import React, {memo} from 'react'
import styled from 'styled-components'

interface IContainerProps {
  width: number,
  height: number,
  fillHeight?: boolean,
  children?: any
}

const Form: React.FC<IContainerProps> = (props) => {
  return (
    <Container {...props}>
      {props.children}
    </Container>
  )
}

const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${props => props.theme.componentes.container.background};
  @media(max-width: calc(${props => props.width}px + 30px)) {
    width: 100%;
    height: auto;
    min-height: ${props => props.fillHeight == true ? '100%' : `${props.height}px`};
    &.main {
      display: block !important;
    }
  }
`

export default memo(Form)