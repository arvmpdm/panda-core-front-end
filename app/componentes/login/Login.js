import React from 'react';
import LoginService from '../../services/login/LoginService';
import update from 'immutability-helper';
class Login extends React.Component {
  
    constructor(){
        super(...arguments)
        this.state={
            username:'',
            password:''
        }
    }

    handleInput(e){
        let field = e.target.name;
        let value = e.target.value;
        if(field === 'username'){
            value = value.replace(' ','').replace('@','').substring(0,15);
            console.log(value);
            this.setState(update(this.state,{
            
                [field]: {$set: value}
            }))
        }
        this.setState(update(this.state,{
            [field]: {$set: value}
        }))
    }
    
    login(e){
        e.preventDefault();
        let request = {
            username: this.state.username,
            password: this.state.password
        }
        LoginService.invokePOST('/login', request,response => {
            window.localStorage.setItem('status', response.status);
            window.localStorage.setItem('menssage', response.menssage);
            
            
        }, error => {
            console.error("===>"+error);
        })
    }

        
  

    render() {
        
        return (
             <div>
            <form onSubmit={this.login.bind(this)}>
                <input type="text" name="username" id="username" value={this.state.username} placeholder="Usuario" onChange={this.handleInput.bind(this)}/>
                <input type="password" name="password" id="password" value={this.state.password} placeholder="Contraseña" onChange={this.handleInput.bind(this)}/>
                <button onClick={this.login.bind(this)}>Aceptar</button>
            </form>
         </div>
        
           
        )
    }
}
export default Login;