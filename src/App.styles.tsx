import styled, {css} from 'styled-components'
import {IoIosArrowUp} from 'react-icons/io'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-flow: wrap;
  justify-content: space-between;
  width: 100%;
  min-height: 100px;
  background-color: ${props => props.theme.header.background};
  box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
  @media(max-width: 1250px) {
    flex-direction: column;
    padding-bottom: 10px;
  }
  @media(max-width: 612px) {
    flex-direction: row;
    /* border-bottom: 5px solid ${props => props.theme.main.background}; */
    overflow-y: auto;
  }
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 20px;
  @media(max-width: 612px) {
    width: 100%;
    padding: 10px;
    svg {
      display: none;
    }
  }
`

export const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  background-color: ${props => props.theme.main.background};
  overflow-x: hidden;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  @media(max-width: 612px) {
    display: block;
  }
`

export const Title = styled.h1`
  font-size: 35px;
  margin-left: 10px;
  color: ${props => props.theme.header.titleForeground};
  @media(max-width: 612px) {
    width: 100%;
    text-align: center;
    font-size: 25px;
    margin-left: 0px;
  }
`
export const ArrowContainer = styled.div`
  display: none;
  width: 100%;
  justify-content: center;
  @media(max-width: 612px) {
    display: flex;
  }
`

interface IArrow {
  visivel: 1 | 0
}


export const Arrow = styled(IoIosArrowUp)<IArrow>`
  width: 40px;
  height: 40px;
  margin-top: 10px;
  color: ${props => props.theme.header.toolbox.arrow};
  transition: transform 400ms;
  ${({ visivel }) => visivel == 0 && css`
    transform: rotateX(180deg);
  `}
`

interface IBarra {
  size: number
}

export const BarContainer = styled.div<IBarra>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 5px;
  div {
    width: ${props => props.size}%;
    max-width: 100%;
    background-color: ${props => props.theme.main.progressBar};
    height: 100%;
    transition: width 200ms;
  }
`