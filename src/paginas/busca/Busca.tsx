import React, {memo, useRef, useState} from 'react'
import {Redirect} from 'react-router-dom'
import Container from '../../componentes/Container'
import Form from '../../componentes/Form'
import Input, {HTMLInputMaskElement} from '../../componentes/Input'
import Button from '../../componentes/Button/Button'
import {CPF} from '../../utils/Utils'
import {Top, Bottom} from './styles'

const Busca: React.FC = () => {
  const [cpf, setCPF] = useState('')
  const inputCPFRef = useRef<HTMLInputMaskElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)
  const enviar = () => {
    const cpf = CPF.tirar(inputCPFRef?.current?.inputElement.value as string)
    if (cpf.length == 11) {
      formRef.current?.submit()
      setCPF(cpf)
    }
  }
  return (
    <Container width={380} height={280}>
      <Top>
        <h2 className="titulo h2">Pesquisar pessoa por CPF</h2>
      </Top>
      <Bottom>
        <Form name="FormBusca" method="GET" ref={formRef}>
          <Input autoComplete="on" name="Pesquisa" id="Pesquisa" placeholder="Digite o CPF"
            height={46} borderSize={2} mask="CPF" ref={inputCPFRef}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key == 'Enter') enviar()
            }} />
        </Form>
        <Button tipo="primary" marginTop={10} onClick={enviar}>Pesquisar</Button>
        {cpf.length == 11 && (
          <Redirect push to={`/busca/${cpf}`} />
        )}
      </Bottom>
    </Container>
  )
}

export default memo(Busca)