
import React from 'react'
import { useAuth } from '../../services/UseAuth'

export const LoginPage = () => {
    console.log(useAuth());
    const {onLogin} = useAuth()
    console.log(onLogin);
    const handleLogin = () => {
        onLogin("Kelvin")
    }

    return (
    <div>
        <h2>Login</h2>
        <button onClick={handleLogin}>LOGIN</button>
    </div>
    )
}
