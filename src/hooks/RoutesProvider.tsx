import React, {memo, useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import {APIContext} from './APIProvider'
import Rota from '../componentes/Rota'
import Login from '../paginas/login/Login'
import Profissional from '../paginas/profissinal/Profissional'
import Busca from '../paginas/busca/Busca'
import Pessoa from '../paginas/pessoa/Pessoa'
import Doses from '../paginas/doses/Doses'
import Adicionar from '../paginas/adicionar/Adicionar'
import Erro from '../paginas/erro/Erro'
import Button from '../componentes/Button/Button'

const RouteProvider: React.FC = () => {
  const API = useContext(APIContext)
  if (!API.crash) {
    return (
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Rota path="/profissional" exact auth>
          <Profissional />
        </Rota>
        <Rota path="/busca" exact auth>
          <Busca />
        </Rota>
        <Rota path="/busca/:cpf" exact auth>
          <Pessoa />
        </Rota>
        <Rota path="/pessoa/:id/doses" exact auth>
          <Doses />
        </Rota>
        <Rota path="/pessoa/:id/doses/adicionar" exact auth>
          <Adicionar/>
        </Rota>
        <Route path="*" exact>
          <Erro titulo="Erro 404" desc="Página desconhecida" />
        </Route>
      </Switch>
    )
  } else {
    return (
      <Erro titulo="Erro de conexão" desc="Não foi possível contatar a API">
        <Button tipo="primary" marginTop={15} onClick={() => {
          API.setCrash(false)
        }}>Tentar novamente</Button>
      </Erro>
    )
  }
}

export default memo(RouteProvider)