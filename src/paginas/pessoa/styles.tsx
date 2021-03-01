import styled from 'styled-components'

export const NaoEncontrado = styled.div`
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

export const Top = styled.div`
  width: 100%;
  min-height: 72px;
  padding: 20px 30px 20px 30px;
  overflow-x: hidden;
  background-color: ${props => props.theme.paginas.busca_found.top.background};
  .nome {
    text-align: center;
    color: ${props => props.theme.paginas.busca_found.top.title};
  }
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  padding: 10px 30px 30px 30px;
  background-color: ${props => props.theme.paginas.busca_found.bottom.background};
  .tableContainer {
    margin-top: 15px;
  }
  @media(max-width: 612px) {
    padding: 10px 20px 20px 20px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  margin-top: 30px;
  flex: 1;
`