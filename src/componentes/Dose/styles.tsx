import styled from 'styled-components'

export const Container = styled.div`
  display: table;
  min-width: 100%;
  margin-top: 20px;
  min-height: 80px;
  border-radius: 5px;
  padding: 10px 10px 10px 15px;
  background-color: ${props => props.theme.paginas.doses.doses.background};
`

export const Vacina = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 30px;
  background-color: ${props => props.theme.paginas.doses.doses.background};
  color: ${props => props.theme.paginas.doses.doses.foreground};
  margin-bottom: 6px;
  svg {
    margin-right: 3px;
    min-width: 25px;
    min-height: 25px;
  }
`

export const Text = styled.div`
  color: ${props => props.theme.paginas.doses.doses.foreground};
  margin-top: 3px;
  font-size: 18px;
`

export const ButtonContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 5px;
  overflow-x: auto;
  button {
    width: 50%;
  }
`