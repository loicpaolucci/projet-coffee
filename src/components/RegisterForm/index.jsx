import { useState } from 'react'
import { Register } from '../../apiCalls/RegisterCall'
import { userStore } from '../../stores/userStore'
import { useAtomValue } from 'jotai'
import "../../assets/styles/forms.scss"

const RegisterForm = () => {

    const {name, email} = useAtomValue(userStore)
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const updatePassword = (password, action) => {
        action(password)
    }

    const checkMatch = (pass1, pass2) => {
        if (pass1 !== pass2) {
            document.getElementById('passwordWarning').innerHTML = "Les mots de passe doivent être identiques"
            document.getElementById('passwordWarning').style.color = "red"
            return (false)
        } else {
            document.getElementById('passwordWarning').innerHTML = "Les mots de passe correspondent"
            document.getElementById('passwordWarning').style.color = "green"
            return (true)
        }
    }

    const login = () => {
        const formData = new FormData(document.getElementById('form'))
        Register(Array.from(formData)[0][1], Array.from(formData)[1][1])
    }

    return (
        <div className="crud-container">
            <form className="form-container" id="form" onSubmit={event => {event.preventDefault(); if (checkMatch(password, password2)) {login()}}}>
                <h1 className='form-title'>Inscrivez-vous {name} {email}</h1>
                <label className='text-green'>Email</label>
                <input type="email" id="email" name="email" className="form-input green-focus" />
                <label className='text-green'>Mot de passe</label>
                <input type="password" id="password" name="password" className="form-input green-focus" onChange={event => updatePassword(event.target.value, setPassword)}/>
                <label className='text-green'>Confirmez le mot de passe</label>
                <input type="password" id="passwordConfirm" name="passwordConfirm" className="form-input green-focus" onChange={event => { updatePassword(event.target.value, setPassword2); checkMatch(event.target.value, password)}}/>
                <p className='text-warning' id="passwordWarning"></p>
                <input type="submit" value="S'inscrire" className="btn bg-green text-light no-border"/>
            </form>
        </div>
    )
}

export default RegisterForm