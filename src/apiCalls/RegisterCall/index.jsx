import { userStore } from "../../stores/userStore"
import { useAtom } from "jotai"

export const Register = (email, password) => {

    const userAtom = useAtom(userStore)

    const datas = {
        user: {
            email,
            password
        }
    }

    fetch("https://mycoffees.herokuapp.com/users", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datas),
    }).then((response) => {
        return (response.json())
    }).then((response) => {
        userAtom({
            name: response.name,
            email: response.email
        })
    })
}