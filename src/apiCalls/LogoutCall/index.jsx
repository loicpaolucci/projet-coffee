import AppStore from '../../stores/Redux/AppStore'
import { useSelector } from "react-redux";
import Cookies from 'js-cookie'

export const Logout = (datas) => {

    console.log("LogOut")

    let token = useSelector(state => state.token)
    token = token ? token : AppStore.getState().state.token

    fetch("https://mycoffees.herokuapp.com/users/sign_out", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(datas),
    })
    Cookies.remove('jwt-token')
    Cookies.remove('user')
}