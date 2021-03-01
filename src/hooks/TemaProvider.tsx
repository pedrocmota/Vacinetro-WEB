import React, {createContext} from 'react'
import {ThemeProvider, DefaultTheme} from 'styled-components'
import usePeristedState from './useStates/usePeristedState'
import GlobalStyle from '../temas/global'
import Light from '../temas/light'
import Dark from '../temas/dark'

interface ITemaContext {
  toggleTheme: () => void,
  tema: DefaultTheme
}

export const TemaContext = createContext<ITemaContext>({} as ITemaContext)

export const TemaProvider: React.FC = (props) => {
  const [nomeTema, setNomeTema] = usePeristedState<ListaTemas>('tema', () => {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })
  const tema = nomeTema == 'light' ? Light : Dark
  const toggleTheme = () => {
    if(tema.titulo == 'light') return setNomeTema('dark')
    if(tema.titulo == 'dark') return setNomeTema('light')
  }
  return (
    <TemaContext.Provider value={{toggleTheme, tema}}>
      <ThemeProvider theme={tema}>
        <GlobalStyle/>
        {props.children}
      </ThemeProvider>
    </TemaContext.Provider>
  )
}