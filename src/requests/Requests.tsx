import {Methods} from '../hooks/APIProvider'
import {IRequests} from '../types/Requests'

const Requests: IRequests = {

  logar: (cpf, senha, callback) => {
    Methods.post('/profissionais/login', {
      cpf: cpf,
      senha: senha
    }, true, (resposta) => {
      callback(resposta)
    }, (erro) => {
      callback(erro)
    })
  },

  pegarDadosPessoais: (callback: Function) => {
    Methods.get('/profissionais/dados', null, true, (resposta) => {
      callback(resposta)
    })
  },

  buscarPessoa: (cpf: string, callback: Function) => {
    Methods.get('/pessoas/busca', {
      cpf: cpf
    }, true, (resposta) => {
      callback(resposta)
    })
  },

  pegarDosesTomadas: (pessoa: string, callback: Function) => {
    Methods.get('/vacinas/lista/profissional', {
      pessoa: pessoa
    }, true, (resposta) => {
      callback(resposta)
    })
  },

  pegarTodasDoencas: (callback: Function) => {
    Methods.get('/vacinas/lista', null, true, (resposta) => {
      callback(resposta)
    })
  },

  pegarNumeroDeDoses: (pessoa: string, doenca: string, callback: Function) => {
    Methods.get('/vacinas/doses/numero', {
      pessoa: pessoa,
      doenca: doenca,
    }, true, (resposta) => {
      callback(resposta)
    })
  },

  adicionarDose: (pessoa: string, doenca: string, vacina: string,
    lote: string, localAplicacao: string, validadeVacina: string, callback: Function) => {
    Methods.post('/vacinas/doses/adicionar', {
      pessoa: pessoa,
      doenca: doenca,
      vacina: vacina,
      lote: lote,
      localAplicacao: localAplicacao,
      validadeVacina: validadeVacina
    }, true, (resposta) => {
      callback(resposta)
    })
  },

  ativarDose: (pessoa: string, dose: string, callback: Function) => {
    Methods.post('/vacinas/doses/ativar', {
      pessoa: pessoa,
      dose: dose
    }, true, (resposta) => {
      callback(resposta)
    })
  },

  inativarDose: (pessoa: string, dose: string, callback: Function) => {
    Methods.post('/vacinas/doses/inativar', {
      pessoa: pessoa,
      dose: dose
    }, true, (resposta) => {
      callback(resposta)
    })
  }
}

export default Requests