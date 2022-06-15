import React from "react";
import { Logout } from "../../apiCalls/LogoutCall";

const Header = () => {
    return (
        <header className="App-header">
            <h1>Hello, voici un Header</h1>
            <button onClick={Logout}>Disconnect</button>
        </header>
    )
}

export default Header