Object.assign(String.prototype, {
  addCharAt(index: number, string: string) {
    const texto = this as string
    if (index > 0) {
      return texto.substring(0, index) + string + texto.substr(index)
    }
    return string + texto
  }
})

export { }