export interface IDadosProfissional {
  id?: string,
  nome: string,
  cpf: string,
  profissao: string,
  registro: string
}

export interface IDadosBuscaPessoa {
  id: string,
  nome: string,
  nascimento: string,
  erro: 'NAO_ENCONTRADO'
}

export interface IDose {
  id: string,
  doenca: string,
  doencaNome: string,
  vacina: string,
  dose: number,
  data: string,
  lote: string,
  localAplicacao: string,
  validadeVacina: string,
  estado: 'ATIVO' | 'INATIVO'
}

export interface IDosesPorProfissional {
  nomes: {
    pessoa: string,
    profissional: string
  },
  doses: IDose[]
}

export interface IDoencas {
  id: string,
  nome: string,
  vacinas: IVacina[],
  doses_minimas: number,
}

export interface IVacina {
  id: string,
  nome: string,
  uso: 'Injetável' | 'Oral'
}

export interface IDoseNumero {
  numero: number
}

export interface IDoseAtivacao {
  retorno: 'OK',
  erro: 
  'OK' |
  'PESSOA_DESCONHECIDA_OU_SEM_VACINACAO' | 
  'DOSE_INVALIDA' | 
  'DOSE_JA_ESTA_INATIVA' |
  'DOSE_JA_ESTA_ATIVA'
}