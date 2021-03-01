import React, {useState, useEffect, useContext, useRef, memo} from 'react'
import {useParams, Redirect} from 'react-router-dom'
import {useToasts} from 'react-toast-notifications'
import {APIContext} from '../../hooks/APIProvider'
import {BarContext} from '../../hooks/BarProvider'
import Container from '../../componentes/Container'
import Form from '../../componentes/Form'
import Select from '../../componentes/Select'
import Input, {HTMLInputMaskElement} from '../../componentes/Input'
import Button from '../../componentes/Button/Button'
import {vazio, Data} from '../../utils/Utils'
import {IDoencas} from '../../types/Dados'
import {Top, Bottom} from './styles'
import {ReactComponent as Spinner} from '../../assets/spinner.svg'

const Adicionar: React.FC = () => {
  const {id} = useParams<IUserID>()
  const select = useRef<HTMLSelectElement | null>(null)
  const inputLocal = useRef<HTMLInputElement | null>(null)
  const inputLote = useRef<HTMLInputElement | null>(null)
  const inputValidade = useRef<HTMLInputMaskElement | null>(null)
  const [doencas, setDoecas] = useState<IDoencas[]>()
  const [enviandoDoenca, setEnviandoDoenca] = useState(false)
  const [enviandoDose, setEnviandoDose] = useState(false)
  const [valido, setValido] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [dosesTomadas, setDosesTomadas] = useState(-1)
  const API = useContext(APIContext)
  const Bar = useContext(BarContext)
  const {addToast} = useToasts()
  useEffect(() => {
    Bar.start()
    API.Requests.pegarTodasDoencas((param) => {
      setDoecas(param)
      Bar.finish()
    })
  }, [])
  const getNumeroDoses = (doenca: string) => {
    setEnviandoDoenca(false)
    Bar.start()
    API.Requests.pegarNumeroDeDoses(id, doenca, (param) => {
      setDosesTomadas(param.numero)
      Bar.finish()
      setEnviandoDoenca(true)
      select!.current!.disabled = false
    })
  }
  const validar = () => {
    const local = inputLocal?.current?.value
    const lote = inputLote?.current?.value
    const validade = inputValidade.current?.inputElement.value
    if (local != undefined && lote != undefined && validade != undefined) {
      const localValido = local.length > 5
      const loteValido = lote.length > 5
      const validadeValida = Data.tirar(validade).length >= 8
      if (localValido && loteValido && validadeValida) {
        if(!valido) setValido(true)
      } else {
        if(valido) setValido(false)
      }
    }
  }
  const adicionar = () => {
    setValido(false)
    setEnviandoDose(true)
    const dados = select.current?.value.split(',')
    const doenca = dados![0]
    const vacina = dados![1]
    const local = inputLocal!.current!.value
    const lote = inputLote!.current!.value
    const validade = inputValidade.current!.inputElement.value
    API.Requests.adicionarDose(id, doenca, vacina, lote, local, validade, (retorno) => {
      setEnviandoDose(false)
      setValido(true)
      if(retorno.retorno == 'OK') {
        setRedirect(true)
        addToast('Dose adicionado com sucesso', {appearance: 'success'})
      } else {
        addToast(retorno.erro, {appearance: 'error'})
      }
    })
  }
  if (doencas == undefined) return vazio()
  return (
    <Container width={600} height={500}>
      <Top>
        <div className="h2 titulo">Adicionar uma dose</div>
      </Top>
      <Bottom>
        <Select height={40} ref={select} onChange={(e) => {
          const value = e.currentTarget.value
          if (value != 'null') {
            const dados = value.split(',')
            const doenca = dados[0]
            if (doenca != 'null') {
              select!.current!.disabled = true
              getNumeroDoses(doenca)
            }
          } else {
            setEnviandoDoenca(false)
          }
        }}>
          <option value="null">SELECIONE UMA VACINA</option>
          {doencas?.map((doenca) => (
            <optgroup key={doenca.id} label={doenca.nome}>
              {doenca.vacinas?.map((vacina) => (
                <option key={vacina.id} value={[doenca.id, vacina.id]}>{vacina.nome}</option>
              ))}
            </optgroup>
          ))}
        </Select>
        {enviandoDoenca && (
          <div className="internalForm">
            <Form name="enviarDose" method="POST">
              <div>
                <div className="h3 nDoses">Número de doses já aplicadas para a doença: {dosesTomadas}</div>
                <div className="linha">
                  <Input name="local" placeholder="Endereço de aplicação" ref={inputLocal} onInput={validar} />
                </div>
                <div className="linha" style={{marginTop: '15px'}}>
                  <Input name="lote" placeholder="Lote da vacina" ref={inputLote}
                    onInput={validar} />
                  <Input name="validade" marginLeft={15} placeholder="Validade da vacina" mask="data" ref={inputValidade}
                    onInput={validar} />
                </div>
              </div>
            </Form>
            <Button tipo={'primary'} marginTop={15} disabled={!valido} 
            height={40} onClick={adicionar}>
              {enviandoDose && (
                <Spinner style={{
                  width: '30px',
                  height: '30px'
                }} />
              )}
              {!enviandoDose && (
                <div>Registrar dose</div>
              )}
            </Button>
          </div>
        )}
      </Bottom>
      {redirect && (
        <Redirect to={`/pessoa/${id}/doses`}/>
      )}
    </Container>
  )
}

export default memo(Adicionar)