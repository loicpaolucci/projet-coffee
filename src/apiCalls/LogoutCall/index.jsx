import Cookies from 'js-cookie'
import AppStore from 'stores/Redux/AppStore'

export const Logout = () => {

    console.log("LogOut", Cookies.get('jwt-token'))

    fetch("https://mycoffees.herokuapp.com/users/sign_out", {
        method: "delete",
        headers: {
            "Authorization": Cookies.get('jwt-token'),
            "Content-Type": "application/json",
                }
    }).then((answer) => {console.log(answer)})
    Cookies.remove('jwt-token', {
        sameSite: "none",
        secure: true
    })
    Cookies.remove('user', {
        sameSite: "none",
        secure: true
    })
    AppStore.dispatch({
        type: 'DESTROY'
    })

}