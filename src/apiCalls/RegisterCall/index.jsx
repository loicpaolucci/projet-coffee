import AppStore from '../../stores/Redux/AppStore'
import Cookies from 'js-cookie'

export const Register = (datas) => {

    console.log("Register")

    fetch("https://mycoffees.herokuapp.com/users", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datas),
    }).then((response) => {
        AppStore.dispatch({
            type: 'EDIT_TOKEN',
            newToken: [...response.headers.get("authorization")].join('')
        })
        Cookies.set('token', [...response.headers.get("authorization")].join(''), {
            sameSite: "None",
            secure: true
        })
        return (response.json())
    }).then((response) => {
        AppStore.dispatch({
            type: "EDIT_USER",
            newUser: response.user
        })
        Cookies.set('user', JSON.stringify(response.user), {
            sameSite: "None",
            secure: true
        })
    })
}