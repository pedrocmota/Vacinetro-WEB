import styled from 'styled-components'

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${props => props.theme.paginas.login.top};
  .h2 {
    margin-top: 6px;
    color: ${props => props.theme.paginas.login.title};
  }
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  background-color: ${props => props.theme.paginas.login.container};
  padding: 10px 25px 15px 25px;
`