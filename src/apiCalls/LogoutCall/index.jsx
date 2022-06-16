import Cookies from 'js-cookie'

export const Logout = () => {

    console.log("LogOut", Cookies.get('token'))

    fetch("https://mycoffees.herokuapp.com/users/sign_out", {
        method: "delete",
        headers: {
            "Content-Type": "application/json",
            "Authorization": Cookies.get('token')
        }
    }).then((answer) => {console.log(answer)})
    Cookies.remove('token', {
        sameSite: "None",
        secure: true
    })
    Cookies.remove('user', {
        sameSite: "None",
        secure: true
    })
}