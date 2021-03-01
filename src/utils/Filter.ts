import {IDose} from '../types/Dados'
import {toLowerCase} from '../utils/Utils'

export const filtrarDoses = (doses: IDose[] | undefined, mostrarInativas: boolean, pesquisa: string) => {
  if (doses != undefined) {
    doses = processarDose(doses)
    if (!mostrarInativas) doses = doses.filter(e => e.estado == 'ATIVO')
    if (pesquisa.length > 0) {
      const antigo = doses
      doses = []
      antigo.forEach((dose) => {
        if (toLowerCase(dose.doencaNome).includes(pesquisa)) return doses?.push(dose)
        if (toLowerCase(dose.vacina).includes(pesquisa)) return doses?.push(dose)
        if (toLowerCase(dose.dose.toString()).includes(pesquisa)) return doses?.push(dose)
        if (toLowerCase(dose.data).includes(pesquisa)) return doses?.push(dose)
        if (toLowerCase(dose.localAplicacao).includes(pesquisa)) return doses?.push(dose)
        if (toLowerCase(dose.lote).includes(pesquisa)) return doses?.push(dose)
        if (toLowerCase(dose.validadeVacina).includes(pesquisa)) return doses?.push(dose)
      })
    }
  }
  return doses
}

const processarDose = (doses: IDose[] | undefined) => {
  let contagem: any = {}
  doses!.forEach((dose) => {
    let qnt = contagem[dose.doenca]
    if (qnt == undefined) qnt = 1
    dose.dose = qnt
    contagem[dose.doenca] = qnt + 1
  })
  return doses as IDose[]
}