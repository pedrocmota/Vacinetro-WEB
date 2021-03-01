import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 40px;
    color: ${props => props.theme.paginas.erro.title}
  }
  h4 {
    font-size: 20px;
    color: ${props => props.theme.paginas.erro.desc}
  }
`