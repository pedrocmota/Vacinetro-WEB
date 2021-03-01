import React, {useState, useContext, useRef} from 'react'
import {Redirect} from 'react-router-dom'
import {useToasts} from 'react-toast-notifications'
import {APIContext} from '../../hooks/APIProvider'
import {CPF} from '../../utils/Utils'
import Container from '../../componentes/Container'
import Form from '../../componentes/Form'
import Input, {HTMLInputMaskElement} from '../../componentes/Input'
import Button from '../../componentes/Button/Button'
import {Top, Bottom} from './styles'
import {ReactComponent as AppIcon} from '../../assets/icone.svg'
import {ReactComponent as Spinner} from '../../assets/spinner.svg'

const Login: React.FC = () => {
  const [enviando, setEnviando] = useState(false)
  const inputCPFRef = useRef<HTMLInputMaskElement | null>(null)
  const inputSenhaRef = useRef<HTMLInputMaskElement | null>(null)
  const botaoRef = useRef<HTMLButtonElement | null>(null)
  const API = useContext(APIContext)
  const {addToast} = useToasts()

  const focusSenha = (e: React.KeyboardEvent<HTMLInputMaskElement>) => {
    if (e.key == 'Enter') inputSenhaRef.current?.focus()
  }
  const focusSenhaTyped = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = CPF.tirar((e.target as HTMLInputMaskElement).value)
    if (value.length == 11) inputSenhaRef.current?.focus()
  }
  const focusBotao = (e: React.KeyboardEvent<HTMLInputMaskElement>) => {
    if (e.key == 'Enter') botaoRef.current?.click()
  }

  const login = () => {
    if (!enviando) {
      const cpf = CPF.tirar(inputCPFRef.current?.inputElement?.value as string)
      const senha = inputSenhaRef.current?.value as string
      if (cpf.length > 0 && senha.length > 0) {
        setEnviando(true)
        API.Requests.logar(cpf, senha, (params) => {
          setEnviando(false)
          if (params.erro == 'NAO_ENCONTRADO') {
            addToast('Profissional não encontrado', {appearance: 'error'})
          }
          if (params.erro == 'SENHA_INCORRETA') {
            addToast('Senha incorreta', {appearance: 'error', })
          }
          if (params.token) {
            API.setToken(params.token)
          }
        })
      }
    }
  }

  return (
    <Container width={440} height={400} fillHeight>
      <Top>
        <AppIcon width={50} height={50} />
        <div className="h2">Realizar login</div>
      </Top>
      <Bottom>
        <Form name="FormLogin" method="POST">
          <Input id="loginCpf" placeholder="Seu CPF" height={46} borderSize={2} mask="CPF"
            onKeyDown={focusSenha} onKeyUp={focusSenhaTyped} ref={inputCPFRef} />
          <Input id="loginSenha" placeholder="Sua senha" type="password" height={46} marginTop={10} borderSize={2}
            onKeyDown={focusBotao} ref={inputSenhaRef} />
          <Button id="botaoLogin" tipo='primary' height={40} marginTop={15} onClick={login} ref={botaoRef}>
            {!enviando && <div>Logar</div>}
            {enviando &&
              <Spinner style={{
                width: '30px',
                height: '30px'
              }} />
            }
          </Button>
        </Form>
      </Bottom>
      {API.isAuth() &&
        <Redirect to="/profissional" />
      }
    </Container>
  )
}

export default Login