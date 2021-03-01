import styled from 'styled-components'

export const Top = styled.div`
  width: 100%;
  height: 72px;
  padding: 20px 30px 20px 30px;
  background-color: ${props => props.theme.paginas.adicionar.top.background};
  .titulo {
    text-align: center;
    color: ${props => props.theme.paginas.adicionar.top.foreground};;
  }
`

export const Bottom = styled.div`
  width: 100%;
  height: calc(100% - 72px);
  padding: 20px 60px 20px 60px;
  background-color: ${props => props.theme.paginas.adicionar.bottom.background};
  .internalForm {
    height: calc(100% - 40px);
  }
  .form {
    width: 100%;
    height: calc(100% - 80px);
    margin-top: 20px;
    form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      .buttonDiv {
        margin-top: 15px;
      }
    }
    .nDoses {
      color: ${props => props.theme.paginas.adicionar.bottom.foreground};;
      text-align: center;
      margin-bottom: 15px;
    }
    .linha {
      width: 100%;
      display: inline-flex;
    }
  }
  @media(max-width: 612px) {
    padding: 20px 20px 20px 20px;
  }
`