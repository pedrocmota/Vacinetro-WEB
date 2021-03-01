import React, {useState, useEffect, useContext, memo} from 'react'
import {useParams} from 'react-router-dom'
import {APIContext} from '../../hooks/APIProvider'
import {BarContext} from '../../hooks/BarProvider'
import Container from '../../componentes/Container'
import Input from '../../componentes/Input'
import CheckBox from '../../componentes/CheckBox'
import Desconhecido from '../../componentes/Desconhecido'
import Dose from '../../componentes/Dose/Dose'
import {filtrarDoses} from '../../utils/Filter'
import {IDosesPorProfissional} from '../../types/Dados'
import {IRequestError} from '../../types/Requests'
import {Top, Bottom, ControleLista, ListaContainer} from './styles'

const Doses: React.FC = () => {
  let {id} = useParams<IUserID>()
  const [dados, setDados] = useState<IDosesPorProfissional & IRequestError>()
  const [mostrarInativas, setMostrarInativas] = useState(false)
  const [pesquisa, setPesquisa] = useState('')
  const API = useContext(APIContext)
  const Bar = useContext(BarContext)
  const doses = filtrarDoses(dados?.doses, mostrarInativas, pesquisa)
  useEffect(() => {
    Bar.start()
    API.Requests.pegarDosesTomadas(id, (params) => {
      setDados(params)
      Bar.finish()
    })
  }, [])
  const atualizar = (dose: IDosesPorProfissional) => {
    const novo:IDosesPorProfissional = {
      nomes: dose.nomes,
      doses: dose.doses
    }
    setDados(novo)
  }
  if (dados == undefined) return <></>
  if (dados.erro == 'PESSOA_DESCONHECIDA') return <Desconhecido titulo="ID desconhecido" returnLink="/busca" />
  return (
    <Container width={720} height={800}>
      <Top>
        <div className="h1 titulo">Doses administradas</div>
        <div className="h2 ellipsis por">Por: {dados.nomes.profissional}</div>
        <div className="h2 ellipsis em">Em: {dados.nomes.pessoa}</div>
      </Top>
      <Bottom>
        <ControleLista>
          <CheckBox size={25} placeholder={'Mostrar inativas'} onChange={(check) => {
            setMostrarInativas(check)
          }} />
          <Input width={280} marginLeft={50} placeholder="Pesquisa um termo" onChange={(e) => {
            setPesquisa(e.target.value)
          }} />
        </ControleLista>
        <ListaContainer vazio={doses!.length == 0}>
          {doses?.map((dose) => (
            <Dose key={dose.id} pessoa={id} dados={dose} doses={dados} setDados={atualizar}/>
          ))}
          {doses && doses.length == 0 && (
            <div className="h2 naoEncontrado">Não há doses registradas para esse usuário</div>
          )}
        </ListaContainer>
      </Bottom>
    </Container>
  )
}

export default memo(Doses)
