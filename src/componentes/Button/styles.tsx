import styled, {css} from 'styled-components'
import {IButtonProps, IEstilosProps} from './Button'

interface ICustumButtonProps {
  colors: IEstilosProps
}

export const CustumButton = styled.button<IButtonProps & ICustumButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.height || 34}px; 
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  background-position: center;
  ${({theme}) => theme.titulo == 'light' && css`
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 
    0 3px 1px -2px rgb(0 0 0 / 12%), 
    0 1px 5px 0 rgb(0 0 0 / 20%);
  `}
  transition: background 0.8s;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: unset;
  }
  &:hover {
    background-color: ${props => props.colors[props.tipo].background.hover};
  }
  &:active {
    background-color: ${props => props.colors[props.tipo].background.active};
    background-size: 100%;
    transition: background 0s;
  }
  &:disabled {
    background-color: ${props => props.colors[props.tipo].background.inactive} !important;
    color: ${props => props.colors[props.tipo].foreground.inactive} !important;
    cursor: default;
  }
  background-color: ${props => props.colors[props.tipo].background.color};
  color: ${props => props.colors[props.tipo].foreground.color};
`