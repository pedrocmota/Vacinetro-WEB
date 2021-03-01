import React, {forwardRef, memo, SelectHTMLAttributes} from 'react'
import styled from 'styled-components'

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement>{
  width?: number,
  height?: number,
  marginTop?: number,
  children: any
}

const Select:React.ForwardRefRenderFunction<any, ISelect> = (props, ref) => {
  return <SelectBox {...props} ref={ref}>{props.children}</SelectBox>
}

const SelectBox = styled.select<ISelect>`
  width: ${props => props.width ? `${props.width}px` : '100%'};
  height: ${props => props.height || 30}px;
  background-color: ${props => props.theme.componentes.select.background};
  color: ${props => props.theme.componentes.select.foreground};;
  border: 1px solid ${props => props.theme.componentes.select.border.default};;
  outline: none;
  transition: 300ms border-color;
  border-radius: 3px;
  font-size: 17px;
  padding-left: 10px;
  &:hover {
    border-color: ${props => props.theme.componentes.select.border.select};;
  }
  optgroup {
    font-size: 18px;
  }
  option {
    font-size: 16px;
  }
`

export default memo(forwardRef(Select))