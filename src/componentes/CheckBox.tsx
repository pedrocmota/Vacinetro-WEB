import React, {useState, memo} from 'react'
import styled from 'styled-components'
import {MdDone} from 'react-icons/md'

interface ICheckBox {
  size: number,
  placeholder: string,
  onChange?: (check: boolean) => void,
  marginTop?: number
}

interface IContainerProps {
  size: number,
  check: boolean
}

const CheckBox: React.FC<ICheckBox> = ({onChange, placeholder, ...rest}) => {
  const [check, setChecked] = useState(false)
  return (
    <Container {...rest} onClick={() => {
      if(onChange) onChange(!check)
      setChecked(!check)
    }}>
      <SelectArea check={check} {...rest} >
        <MdDone/>
      </SelectArea>
      <div className="check-text">{placeholder}</div>
    </Container>
  )
}

const Container = styled.div`
  display: inline-flex !important;
  width: auto;
  cursor: pointer;
  .check-text {
    display: flex;
    align-items: center;
    color: ${props => props.theme.componentes.checkbox.color};
    margin-left: 8px;
    font-size: 18px;
    word-break: break-all;
    user-select: none
  }
`

const SelectArea = styled.div<IContainerProps>`
  width: ${props => props.size}px !important;
  height: ${props => props.size}px !important;
  min-width: ${props => props.size}px !important;
  min-height: ${props => props.size}px !important;
  max-width: ${props => props.size}px !important;
  max-height: ${props => props.size}px !important;
  border: solid 1px #3a3737;
  background-color: ${props => props.check ? '#2facbd' : 'transparent'};
  svg {
    opacity: ${props => props.check ? 100 : 0};
    width: 100%;
    height: 100%;
    color: white;
    transition: opacity 100ms;
  }
`

export default memo(CheckBox)