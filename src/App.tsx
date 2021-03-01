import React, {memo, useState, useContext} from 'react'
import RoutesProvider from './hooks/RoutesProvider'
import ToolBox from './componentes/ToolBox'
import {BarContext} from './hooks/BarProvider'
import {Container, HeaderContainer, Main, Title, LeftSide, ArrowContainer, Arrow, BarContainer} from './App.styles'
import {ReactComponent as MainIcon} from './assets/icone.svg'

const App: React.FC = memo(() => {
  const Barra = useContext(BarContext)
  return (
    <Container>
      <Header/>
      <Main className="main">
        <BarContainer size={Barra.size}>
          <div className="ProgressBar"/>
        </BarContainer>
        <RoutesProvider />
      </Main>
    </Container>
  )
})

const Header: React.FC = memo(() => {
  const [toolBoxVisible, setToolBoxVisible] = useState(true)
  return (
    <HeaderContainer>
      <LeftSide>
        <MainIcon width={50} height={50} />
        <Title>Carteira de vacinação digital</Title>
      </LeftSide>
      <ToolBox visivel={toolBoxVisible} />
      <ArrowContainer>
        <Arrow visivel={toolBoxVisible ? 1 : 0} onClick={() => {
          setToolBoxVisible(!toolBoxVisible)
        }} />
      </ArrowContainer>
    </HeaderContainer>
  )
})

export default App