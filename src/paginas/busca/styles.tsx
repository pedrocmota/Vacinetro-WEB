import styled from 'styled-components'

export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  color: ${props => props.theme.paginas.busca.foreground};
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  padding-left: 35px;
  padding-right: 35px;
  .form {
    width: 100%;
  }
`



export const Container = styled.div`
  width: 380px;
  height: 280px;
  background-color: ${props => props.theme.paginas.busca.background};
  border-radius: 5px;
  padding: 10px 35px 10px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: ${props => props.theme.paginas.busca.foreground};
    text-align: center;
    margin-top: 15px;
  }
  .Busca_Top {

  }
  .Busca_Bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    div {
      width: 100%;
    }
  }
  @media(max-width: 480px) {
    width: 100%;
    padding: 10px 25px 10px 25px;
    h2 {
      font-size: 20px;
    }
  }
`