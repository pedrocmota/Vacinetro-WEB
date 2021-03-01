import React, {memo, useContext, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {TemaContext} from '../../hooks/TemaProvider'
import {APIContext} from '../../hooks/APIProvider'
import {BarContext} from '../../hooks/BarProvider'
import Container from '../../componentes/Container'
import Tabela from '../../componentes/Tabela'
import Button from '../../componentes/Button/Button'
import Desconhecido from '../../componentes/Desconhecido'
import {IDadosBuscaPessoa} from '../../types/Dados'
import {Top, Bottom, ButtonContainer} from './styles'

const Pessoa: React.FC = () => {
  const [dados, setDados] = useState<IDadosBuscaPessoa>()
  const Tema = useContext(TemaContext)
  const API = useContext(APIContext)
  const Bar = useContext(BarContext)
  let {cpf} = useParams<ICPF>()
  useEffect(() => {
    Bar.start()
    API.Requests.buscarPessoa(cpf, (params) => {
      setDados(params)
      Bar.finish()
    })
  }, [])
  if (dados == undefined) return <></>
  if (dados.erro == 'NAO_ENCONTRADO') return <Desconhecido titulo="CPF desconhecido" returnLink="/busca" />
  return (
    <Container width={520} height={480} fillHeight>
      <Top>
        <div className="h2 cutText nome">{dados.nome}</div>
      </Top>
      <Bottom>
        <Tabela leftColor={Tema.tema.paginas.busca_found.bottom.table.left}
          rightColor={Tema.tema.paginas.busca_found.bottom.table.right}>
          <tbody>
            <tr>
              <td id="col1">Nome:</td>
              <td id="col2">{dados.nome}</td>
            </tr>
            <tr>
              <td id="col1">Nascimento:</td>
              <td id="col2">{dados.nascimento}</td>
            </tr>
            <tr>
              <td id="col1">Estado:</td>
              <td id="col2">Ativo</td>
            </tr>
          </tbody>
        </Tabela>
        <ButtonContainer>
          <Button tipo="primary">
            <Link to="/busca">Voltar</Link>
          </Button>
          <Button tipo="primary" marginTop={10}>
            <Link to={`/pessoa/${dados.id}/doses`}>Gerenciar doses</Link>
          </Button>
          <Button tipo="primary" marginTop={10}>
            <Link to={`/pessoa/${dados.id}/doses/adicionar`}>Adicionar nova dose</Link>
          </Button>
        </ButtonContainer>
      </Bottom>
    </Container>
  )
}

export default memo(Pessoa)