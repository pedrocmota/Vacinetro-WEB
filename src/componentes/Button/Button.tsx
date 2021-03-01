import React, {useContext, forwardRef, ButtonHTMLAttributes} from 'react'
import {TemaContext} from '../../hooks/TemaProvider'
import {CustumButton} from './styles'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tipo: ButtonType,
  height?: number,
  marginTop?: number,
  marginBottom?: number
}

type ButtonType = 'primary' | 'error'

export interface IEstilosProps {
  primary: {
    background: {
      color: string,
      inactive: string,
      hover: string,
      active: string
    },
    foreground: {
      color: string,
      inactive: string
    }
  },
  error: {
    background: {
      color: string,
      inactive: string,
      hover: string,
      active: string
    },
    foreground: {
      color: string,
      inactive: string
    }
  }

}

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, IButtonProps> = (props, ref) => {
  const Tema = useContext(TemaContext)
  const estilos: IEstilosProps = {
    primary: {
      background: {
        color: Tema.tema.componentes.button.primary.background,
        inactive: '#62656a',
        hover: Tema.tema.componentes.button.primary.hover,
        active: Tema.tema.componentes.button.primary.active
      },
      foreground: {
        color: Tema.tema.componentes.button.primary.foreground,
        inactive: '#ffffff'
      }
    },
    error: {
      background: {
        color: Tema.tema.componentes.button.error.background,
        inactive: '#62656a',
        hover: Tema.tema.componentes.button.error.hover,
        active: Tema.tema.componentes.button.error.active
      },
      foreground: {
        color: Tema.tema.componentes.button.error.foreground,
        inactive: '#ffffff'
      }
    }
  }
  return <CustumButton ref={ref} colors={estilos} {...props} />
}

export default forwardRef(Button)
