import React, {useContext} from 'react'
import {Route, Redirect, RouteProps} from 'react-router-dom'
import {APIContext} from '../hooks/APIProvider'

interface IRotaProps extends RouteProps {
  auth: boolean
}

const Rota: React.FC<IRotaProps> = ({auth, children, ...rest}) => {
  const API = useContext(APIContext)
  if (auth && !API.isAuth()) return <Redirect to="/" />
  return (
    <Route {...rest}>
      {children}
    </Route>
  )
}

export default Rota