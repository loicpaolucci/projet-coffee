import React from 'react'
import { Login } from '../../apiCalls/LoginCall'
import "../../assets/styles/forms.scss"
import Footer from "../Footer";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const navigate = useNavigate()

    const login = () => {
        const formData = new FormData(document.getElementById('form'))
        const datas = {
            user: {
                email: Array.from(formData)[0][1],
                password: Array.from(formData)[1][1]
            }
        }
        Login(datas)
        navigate('/index-cofee')
    }

    return (
        <div className="crud-container">
            <form className="form-container" id="form" onSubmit={event => {event.preventDefault(); login()}}>
                <h1 className='form-title'>Connectez-vous</h1>
                <label className='text-green'>Email</label>
                <input type="email" id="email" name="email" className="form-input green-focus" />
                <label className='text-green'>Mot de passe</label>
                <input type="password" id="password" name="password" className="form-input green-focus" />
                <input type="submit" value="Se Connecter" className="btn bg-green text-light no-border"/>
            </form>
            <Footer />
        </div>
    )
}

export default LoginForm