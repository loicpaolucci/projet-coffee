import { Link } from "react-router-dom";
import './style.css'

const Navbar = () => {
    return (

        <nav>
            <ul className="liste">
                <Link to="/home" className="items">Accueil</Link>
                <Link to="/login" className="items">Se connecter</Link>
                <Link to="/register" className="items">S'inscrire</Link>
            </ul>
        </nav>




    )
}

export default Navbar;