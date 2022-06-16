import { Link } from "react-router-dom";
import AppStore from "stores/Redux/AppStore";
import { Logout } from "apiCalls/LogoutCall";
import { useSelector } from "react-redux";
import './style.css'

const Navbar = () => {

    let jwt = useSelector((state) => state.token);
    jwt = jwt ? jwt : AppStore.getState().state.token;

    function logout() {
        Logout();
    }

    return (

        <nav>
            <ul className="liste">
                <Link to="/home" className="items">Accueil</Link>
                {jwt === "" ?
                    <>
                        <Link to="/login" className="items">Se connecter</Link>
                        <Link to="/register" className="items">S'inscrire</Link>
                    </>
                    :
                    <>
                        <Link to="/profile" className="items">Mon profil</Link>
                        <Link to="/home" onClick={logout} className="items">Se déconnecter</Link>
                        <Link to="/sell-cofee" className="items">Vendre</Link>
                        <Link to="/index-cofee" className="items">Voir les cafés</Link>
                    </>
                }
            </ul>
        </nav>




    )
}

export default Navbar;