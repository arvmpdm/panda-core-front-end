import React from 'react';
import LoginService from '../../services/login/LoginService';

class Login extends React.Component {
  

    constructor(props) {
        super(props);
        this.state = {
            login: []
        };
       

        LoginService.invokeGET('/ditto',response =>{
            this.setState({login: response});
        })
        
    }
    

    render() {
        console.log("THIS"+this.state.login.base_experience);
        return (
            
         <p>It's Works</p>
           
        );
    }
}

export default Login;