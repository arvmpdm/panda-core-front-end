import React from 'react'
import { render } from 'react-dom'
import Login from './componentes/login/Login'
class App extends React.Component{

  render(){
    return(
    <Login />
    )
  }
}
render(<App/>, document.getElementById('root'));