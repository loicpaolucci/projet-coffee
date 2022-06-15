const Register = (email, password) => {
    const datas = {
        user: {
            email,
            password
        }
    }

    fetch("https://mycoffees.herokuapp.com/users")
}

export default Register