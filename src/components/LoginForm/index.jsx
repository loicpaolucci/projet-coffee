import React from 'react'
import "../../assets/styles/forms.scss"

const LoginForm = () => {    
    return (
        <div className="crud-container">
            <form className="form-container">
                <h1 className='form-title'>Connectez-vous</h1>
                <label className='text-green'>Email</label>
                <input type="email" id="email" name="email" className="form-input green-focus" />
                <label className='text-green'>Mot de passe</label>
                <input type="password" id="password" name="password" className="form-input green-focus" />
                <input type="submit" value="Se Connecter" className="btn bg-green text-light no-border"/>
            </form>
        </div>
    )
}

export default LoginForm