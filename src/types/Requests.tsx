import {
  IDadosProfissional, 
  IDadosBuscaPessoa, 
  IDosesPorProfissional,
  IDoencas,
  IDoseNumero,
  IDoseAtivacao
} from './Dados'

export interface IRequests {
  logar: (cpf: string, senha: string, callback: (param: {
    token: string
  } & IRequestError) => void) => void,

  pegarDadosPessoais: (callback: (
    param: IDadosProfissional & IRequestError
  ) => void) => void

  buscarPessoa: (cpf: string, callback: (
    param: IDadosBuscaPessoa & IRequestError
  ) => void) => void,

  pegarDosesTomadas: (pessoa: string, callback: (
    param: IDosesPorProfissional & IRequestError
  ) => void) => void,

  pegarTodasDoencas: (callback: (
    param: IDoencas[] & IRequestError
  ) => void) => void,

  pegarNumeroDeDoses: (pessoa: string, doenca:string, callback: (
    param: IDoseNumero
  ) => void) => void,

  adicionarDose: (pessoa: string, doenca: string, vacina: string, 
    lote: string, localAplicacao:string, validadeVacina:string, callback: (
    param: {
      erro: adicionarErros
      retorno: 'OK'
    }
  ) => void) => void,

  ativarDose: (pessoa: string, dose: string, callback: (
    param: IDoseAtivacao
  ) => void) => void

  inativarDose: (pessoa: string, dose: string, callback: (
    param: IDoseAtivacao
  ) => void) => void
}

export interface IRequestError {
  axiosError?: boolean,
  erro?: requestsErrors
}

type requestsErrors =
  'TOKEN_INVALIDO' |
  'NAO_ENCONTRADO' |
  'SENHA_INCORRETA'|
  'PESSOA_DESCONHECIDA'

type adicionarErros = 
  'OK' | 
  'USUARIO_INVALIDO' | 
  'DOENÇA_INVALIDA' | 
  'vACINA_INVALIDA' | 
  'DATA_INVALIDA' | 
  'LOTE_INVALIDO' |
  'LOCAL_INVALIDO'