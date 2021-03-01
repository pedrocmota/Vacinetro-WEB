import styled, {css} from 'styled-components'

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 140px;
  padding: 15px 25px 15px 25px;
  background-color: ${props => props.theme.paginas.doses.top.background};
  color: ${props => props.theme.paginas.doses.top.foreground};;
  .h2 {
    font-size: 20px;
    margin-top: 5px;
    max-width: 90%;
  }
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  padding: 10px 30px 20px 30px;
  background-color: ${props => props.theme.paginas.doses.bottom.background};
  @media(max-width: 600px) {
    padding: 10px 5px 20px 5px;
  }
`

export const ControleLista = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  width: 100%;
  @media(max-width: 600px) {
    flex-direction: column;
    height: 100px;
    input {
      width: 90%;
      margin-top: 20px;
      margin-left: 0px;
    }
  }
`

interface IListaContainer {
  vazio: boolean
}

export const ListaContainer = styled.div<IListaContainer>`
  width: calc(100% - 20px);
  height: calc(100% - 50px);
  overflow-y: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 10px;
  overflow-y: auto;
  ${({vazio}) => vazio && css`
    width: 100%;
    padding-top: 50px;
    .naoEncontrado {
      color: ${props => props.theme.paginas.doses.naoEncontrado};
      text-align: center;
    }
  `}
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #4b5464;
  }
  &::-webkit-scrollbar {
    width: 12px;
    background-color: #4b5464;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #818a9b;
  }
  @media(max-width: 600px) {
    height: calc(100% - 100px);
    padding-left: 0px;
    padding-right: 0px;
  }
`