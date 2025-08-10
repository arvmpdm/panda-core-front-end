import React from 'react';

  

    const LoginForm  = () => {
        const [username, setUsername] = React.useState("");
        const [error,setError]=React.useState("");
        const handleSubmit= async (event) => {
        event.preventDefault();
        setError("");
        // Lógica de autenticación aquí
    }

    } 
class Login extends React.Component {


    render() {
        return (
           <form onSubmit={LoginForm.handleSubmit}>
            {LoginForm.error && <div className="error">{LoginForm.error}</div>}
            <div>
                <label >Usuario</label>
                <input type="text" value={LoginForm.username} 
                placeholder='Ingrese su usuario'
                onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password" value={LoginForm.password} 
                placeholder='Ingrese su contraseña'
                onChange={(e) => LoginForm.setPassword(e.target.value)} required />
            </div>
            <button type="submit">Iniciar Sesión</button>
           </form>
        );
    }
}

export default Login;
