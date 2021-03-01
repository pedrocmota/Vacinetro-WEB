import React, {memo} from 'react'
import styled from 'styled-components'

interface ITabelaProps {
  children?: any,
  leftColor: string,
  rightColor: string
}

const Tabela: React.FC<ITabelaProps> = (props) => {
  return (
    <TableContainer className="tableContainer">
      <Table {...props} className="table">
        {props.children}
      </Table>
    </TableContainer>
  )
}

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`

const Table = styled.table<ITabelaProps>`
  width: 100%;
  font-size: 20px;
  tr {
    height: 45px;
    #col1 {
      text-align: left;
      color: ${props => props.leftColor};
      min-width: 180px;
    }
    #col2 {
      color: ${props => props.rightColor};
      text-align: left;
      padding-left: 25px;
    }
  }
`

export default memo(Tabela)