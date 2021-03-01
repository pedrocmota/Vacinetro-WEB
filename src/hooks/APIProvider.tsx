import React, {useState, useEffect, createContext, useContext} from 'react'
import axios from 'axios'
import {useToasts} from 'react-toast-notifications'
import {BarContext} from './BarProvider'
import usePeristedState from './useStates/usePeristedState'
import isDev from '../utils/DevDetect'
import Requests from '../requests/Requests'
import {IRequests} from '../types/Requests'

interface IAPIContext {
  endereco: string,
  token: string,
  setToken: Function,
  isAuth: () => boolean,
  resetAuth: () => void,
  crash: boolean,
  setCrash: React.Dispatch<React.SetStateAction<boolean>>,
  Requests: IRequests
}

interface IMethods {
  post: (route: string, data: object, auth: boolean, 
    callbackOk: (resposta: any) => void, callbackError?: (erro: any) => void
  ) => void,
  get: (route: string, data: object | null, auth: boolean, 
    callbackOk: (resposta: any) => void
  ) => void
}

export const APIContext = createContext<IAPIContext>({} as IAPIContext)

export let Methods:IMethods

export const APIProvider: React.FC = (props) => {
  const [token, setToken] = usePeristedState<string>('token', '')
  const [endereco, setEndereco] = useState('')
  const [crash, setCrash] = useState(false)
  const Bar = useContext(BarContext)
  const {addToast} = useToasts()

  useEffect(() => {
    const loading = async() => {
      const adress = isDev() ? '/api.adress.json' : '/public/api.adress.json'
      const dados = await (await axios.get(adress)).data
      setEndereco(dados['adress'])
    }
    loading()
  }, [])

  const isAuth = () => {
    return token.length > 0
  }
  const resetAuth = () => {
    return setToken('')
  }
  Methods = {
    post: async (route, data, auth, callbackOk, callbackError) => {
      if (!route.startsWith('/')) route = `/${route}`
      axios.post(`${endereco}${route}`, data, {
        headers: {
          'token': auth ? token : null
        }
      }).then((resposta: any) => {
        if(resposta.data.tokenErro == undefined) {
          callbackOk(resposta.data)
        } else {
          addToast('Sua sessão foi expirada', {appearance: 'error'})
          Bar.finish()
          setToken('')
        }
      }).catch((erro) => {
        addToast('Falha ao enviar solicitação', {appearance: 'error'})
        if(callbackError != undefined) callbackError(erro)
      })
    },
    
    get: async (route, data, auth, callbackOk) => {
      if (!route.startsWith('/')) route = `/${route}`
      axios.get(`${endereco}${route}`, {
        params: data,
        headers: {
          'token': auth ? token : null
        }
      }).then((resposta:any) => {
        if(resposta.data.tokenErro == undefined) {
          callbackOk(resposta.data)
        } else {
          addToast('Sua sessão foi expirada', {appearance: 'error'})
          Bar.finish()
          setToken('')
        }
      }).catch(() => {
        Bar.finish()
        setCrash(true)
      })
    }
  }

  return (
    <APIContext.Provider value={{
      endereco, token, setToken, isAuth, resetAuth, crash, setCrash, Requests
    }}>
      {endereco.length > 0 && (
        props.children
      )}
    </APIContext.Provider>
  )
}