import React, {useContext, useState, memo} from 'react'
import {useToasts} from 'react-toast-notifications'
import Button from '../Button/Button'
import {APIContext} from '../../hooks/APIProvider'
import {RiMedicineBottleLine} from 'react-icons/ri'
import {IDose, IDosesPorProfissional} from '../../types/Dados'
import {Container, Vacina, Text, ButtonContainer} from './styles'
import {ReactComponent as Spinner} from '../../assets/spinner.svg'

interface IDoseProps {
  pessoa: string,
  dados: IDose,
  doses: IDosesPorProfissional,
  setDados: (doses: IDosesPorProfissional) => void
}

const Dose: React.FC<IDoseProps> = ({pessoa, dados, doses, setDados}) => {
  const API = useContext(APIContext)
  const [enviando, setEnviando] = useState(false)
  const {addToast} = useToasts()
  return (
    <Container>
      <Vacina>
        <RiMedicineBottleLine size={25}/>
        {dados.vacina}
      </Vacina>
      <Text>Doença: <b>{dados.doencaNome}</b></Text>
      <Text>Dose número: <b>{dados.dose}</b></Text>
      <Text>Data de vacinação: <b>{dados.data}</b></Text>
      <Text>Local de vacinação: <b>{dados.localAplicacao}</b></Text>
      <Text>Lote da vacina: <b>{dados.lote}</b></Text>
      <Text>Validade do lote: <b>{dados.validadeVacina}</b></Text>
      <Text>Estado da dose: <b>{dados.estado}</b></Text>
      <ButtonContainer>
        {dados.estado == 'ATIVO' && (
          <Button tipo="error" onClick={() => {
            if(!enviando) {
              setEnviando(true)
              API.Requests.inativarDose(pessoa, dados.id, (param) => {
                if(param.retorno == 'OK') {
                  let lista = doses.doses
                  const dose = lista.find(element => element.id == dados.id)
                  dose!.estado = 'INATIVO'
                  doses.doses = lista
                  setEnviando(false)
                  setDados(doses)
                  addToast('Dose inativada com sucesso!', {appearance: 'success'})
                } else {
                  setEnviando(false)
                  addToast(param.erro, {appearance: 'error'})
                }
              })
            }
          }}>
            {enviando && (
              <Spinner width={30} height={30}/>
            )}
            {!enviando && (
              <div>Inativar dose</div>
            )}
          </Button>
        )}
        {dados.estado == 'INATIVO' && (
          <Button tipo="primary" onClick={() => {
            if(!enviando) {
              setEnviando(true)
              API.Requests.ativarDose(pessoa, dados.id, (param) => {
                if(param.retorno == 'OK') {
                  let lista = doses.doses
                  const dose = lista.find(element => element.id == dados.id)
                  dose!.estado = 'ATIVO'
                  doses.doses = lista
                  setEnviando(false)
                  setDados(doses)
                  addToast('Dose ativada com sucesso!', {appearance: 'success'})
                } else {
                  setEnviando(false)
                  addToast(param.erro, {appearance: 'error'})
                }
              })
            }
          }}>
            {enviando && (
              <Spinner width={30} height={30}/>
            )}
            {!enviando && (
              <div>Ativar dose</div>
            )}
          </Button>
        )}
      </ButtonContainer>
    </Container>
  )
}

export default memo(Dose)