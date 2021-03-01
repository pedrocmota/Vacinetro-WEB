interface String {
  addCharAt: (index: number, string: string) => any;
}

interface ICPF {
  cpf: string
}

interface IUserID {
  id: string
}

type HTTPMethods = 'GET' | 'POST' | 'PUT' | 'DELETE'