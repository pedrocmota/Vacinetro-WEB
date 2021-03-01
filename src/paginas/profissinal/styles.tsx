import styled from 'styled-components'

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 72px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${props => props.theme.paginas.profissional.background.top};
  .nome {
    color: ${props => props.theme.paginas.profissional.title};
    margin-top: 10px;
    max-height: 100px;
    overflow: hidden;
  }
`
export const Bottom = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${props => props.theme.paginas.profissional.background.bottom};
  @media(max-width: 612px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const Tabela = styled.table`
  width: 100%;
  font-size: 20px;
  tr {
    height: 45px;
    #col1 {
      text-align: left;
      color: ${props => props.theme.paginas.profissional.table.left};
    }
    #col2 {
      color: ${props => props.theme.paginas.profissional.table.right};
      text-align: right;
      padding-left: 25px;
    }
  }
`