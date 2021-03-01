import React, {memo, useContext, useEffect, useState} from 'react'
import {APIContext} from '../../hooks/APIProvider'
import {BarContext} from '../../hooks/BarProvider'
import {TemaContext} from '../../hooks/TemaProvider'
import Container from '../../componentes/Container'
import Tabela from '../../componentes/Tabela'
import {Top, Bottom, Avatar} from './styles'
import {CPF} from '../../utils/Utils'
import {IDadosProfissional} from '../../types/Dados'

const Profissional: React.FC = () => {
  const API = useContext(APIContext)
  const Bar = useContext(BarContext)
  const Tema = useContext(TemaContext)
  const [dados, setDados] = useState<IDadosProfissional>()
  useEffect(() => {
    Bar.start()
    API.Requests.pegarDadosPessoais((params) => {
      setDados(params)
      Bar.finish()
    })
  }, [])
  if (dados == undefined) {
    return <></>
  }
  return (
    <Container width={520} height={480} fillHeight>
      <Top className="top">
        <div className="nome h2">{dados.nome}</div>
        <Avatar src={`${API.endereco}/profissionais/foto?id=${dados.id}`} />
      </Top>
      <Bottom className="bottom">
        <Tabela 
        leftColor={Tema.tema.paginas.profissional.table.left} 
        rightColor={Tema.tema.paginas.profissional.table.right}>
          <tbody>
            <tr>
              <th id="col1">CPF:</th>
              <th id="col2">{CPF.adicionar(dados?.cpf as string)}</th>
            </tr>
            <tr>
              <th id="col1">Profissional:</th>
              <th id="col2">{dados?.profissao}</th>
            </tr>
            <tr>
              <th id="col1">Número de registro:</th>
              <th id="col2">{dados?.registro}</th>
            </tr>
            <tr>
              <th id="col1">Estado:</th>
              <th id="col2">Ativo</th>
            </tr>
          </tbody>
        </Tabela>
      </Bottom>
    </Container>
  )
}

export default memo(Profissional)