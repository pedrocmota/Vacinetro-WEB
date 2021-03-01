import React, {forwardRef, InputHTMLAttributes} from 'react'
import styled from 'styled-components'
import MaskedInput from 'react-text-mask'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: number,
  height?: number,
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  borderSize?: number,
  mask?: maskTypes
}

export interface HTMLInputMaskElement extends HTMLInputElement {
  inputElement: HTMLInputElement
}

type maskTypes = 'CPF' | 'data'

const masks = {
  CPF: [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
  data: [/[0-9]/,  /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
}

const Input: React.ForwardRefRenderFunction<any, IInputProps> = (props, ref) => {
  if (props.mask) {
    const m = masks[props.mask]
    return (
      <MaskedInput
      ref={ref}
      mask={m}
      render={(ref, p) => (
        <CustumInput {...props} ref={(input) => ref(input as HTMLElement)} {...p} />
      )}
      />
    )
  } else {
    return <CustumInput ref={ref} {...props}/>
  }
}

const CustumInput = styled.input<IInputProps>`
  width: ${props => props.width ? `${props.width}px` : '100%'};
  height: ${props => props.height || 34}px;
  padding-left: 10px;
  background-color: ${props => props.theme.componentes.input.background};
  color: ${props => props.theme.componentes.input.foreground};
  border: ${props => props.borderSize || 1}px solid ${props => props.theme.componentes.input.border.default};
  border-radius: 3px;
  outline: none;
  transition: 300ms border-color;
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  margin-left: ${props => props.marginLeft || 0}px;
  font-size: 16px;
  caret-color: ${props => props.theme.componentes.input.carret};
  &::placeholder {
    color: ${props => props.theme.componentes.input.foreground};
  }
  &:focus {
    border-color: ${props => props.theme.componentes.input.border.select};
  }
  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px 
   ${props => props.theme.componentes.input.background} inset !important;
   -webkit-text-fill-color: ${props => props.theme.componentes.input.foreground} !important; 
   -webkit-box-shadow: 0 0 0px 1000px 
   ${props => props.theme.componentes.input.background} inset !important;
   -webkit-text-fill-color: ${props => props.theme.componentes.input.foreground} !important;
  }
  &:-webkit-autofill::first-line {
    font-family: Arial !important;
    font-size: 16px !important;
  }
  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }
`

export default forwardRef(Input)