import React, {useEffect, useState, createContext} from 'react'

interface IBarContext {
  size: number,
  start: () => void,
  finish: () => void
}

export const BarContext = createContext<IBarContext>({} as IBarContext)

let iniciado = false
let andando = false
let finalizando = false

export const BarProvider: React.FC = (props) => {
  const [size, setSize] = useState(0)
  useEffect(() => {
    if(iniciado) {
      const newSize = size + 10
      if(newSize <= 100 && !finalizando) {
        setTimeout(() => {
          if(!finalizando) setSize(newSize)
        }, 500)
      }
      if(newSize >= 100) andando = false
    }
  }, [size])

  const start = () => {
    if(!andando) {
      iniciado = true
      finalizando = false
      andando = true
      setSize(10)
    }
  }

  const finish = () => {
    iniciado = false
    finalizando = true
    andando = false
    setSize(100)
    setTimeout(() => {
      setSize(0)
    }, 500)
  }
  return (
    <BarContext.Provider value={{size, start, finish}}>
      {props.children}
    </BarContext.Provider>
  )
}