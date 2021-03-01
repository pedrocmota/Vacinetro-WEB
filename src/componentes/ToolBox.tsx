import React, {useContext, memo} from 'react'
import {Link} from 'react-router-dom'
import Switch from 'react-switch'
import styled from 'styled-components'
import {TemaContext} from '../hooks/TemaProvider'
import {APIContext} from '../hooks/APIProvider'
import {AiFillHome} from 'react-icons/ai/'
import {BsMoon, BsSearch} from 'react-icons/bs'
import {ImExit} from 'react-icons/im'

interface IToolBox {
  visivel: boolean
}

const ToolBox: React.FC<IToolBox> = (props) => {
  const Tema = useContext(TemaContext)
  const API = useContext(APIContext)
  return (
    <Container visivel={props.visivel}>
      <Box visivel={1}>
        <Link className="Box_Label" to="/profissional">
          <div className="box_Top">
            <AiFillHome size={35} />
          </div>
          <div className="bot_Bottom">
            <label className="Box_Label">Página inicial</label>
          </div>
        </Link>
      </Box>
      <Box visivel={API.isAuth() ? 1 : 0}>
        <Link className="Box_Label" to="/busca">
          <div className="box_Top">
            <BsSearch size={35} />
          </div>
          <div className="bot_Bottom">
            <label className="Box_Label">Buscar pessoas</label>
          </div>
        </Link>
      </Box>
      <Box visivel={API.isAuth() ? 1 : 0} onClick={API.resetAuth}>
        <div className="box_Top">
          <ImExit size={35} />
        </div>
        <div className="bot_Bottom">
          <label className="Box_Label">Finalizar sessão</label>
        </div>
      </Box>
      <Box visivel={1}>
        <div className="box_Top">
          <div className="changeTheme">
            <Switch
              onChange={Tema.toggleTheme}
              checked={Tema.tema.titulo == 'dark'}
              className="react-switch"
              width={48}
              height={20}
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              checkedHandleIcon={<BsMoon />}
              uncheckedHandleIcon={<BsMoon />}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
              onColor={Tema.tema.header.switch.background}
              offHandleColor={Tema.tema.header.switch.foreground}
              onHandleColor={Tema.tema.header.switch.foreground}
            />
          </div>
        </div>
        <div className="bot_Bottom">
          <label className="Box_Label">{Tema.tema.titulo} mode</label>
        </div>
      </Box>
    </Container>
  )
}

export const Container = styled.div<IToolBox>`
  display: ${props => props.visivel ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  @media(max-width: 612px) {
    width: 100%;
    flex-wrap: wrap;
  }
`

interface IBoxProps {
  visivel: 0 | 1
}

export const Box = styled.div<IBoxProps>`
  width: 120px;
  height: 70px;
  display: ${props => props.visivel == 1 ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 8px;
  cursor: pointer !important;
  .box_Top {
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer !important;
    color: ${props => props.theme.header.toolbox.foreground}
  }
  .Box_Label {
    display: block;
    font-size: 16px;
    text-align: center;
    margin-top: 5px;
    margin-top: 0px;
    text-decoration: none;
    cursor: pointer !important;
    color: ${props => props.theme.header.toolbox.foreground}
  }
  .Box_Label:first-letter {
    text-transform: uppercase;
  }
  .react-switch-handle {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 200ms;
      color: ${props => props.theme.header.switch.icon}
    }
  }
  &:hover {
    background-color: ${props => props.theme.header.toolbox.hover}
  }
  @media(max-width: 612px) {
    margin-top: 15px;
    margin-left: 12px;
    margin-right: 12px;
    padding-bottom: 10px;
  }
`

export default memo(ToolBox)