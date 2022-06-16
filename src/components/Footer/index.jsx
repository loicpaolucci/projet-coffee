import { Link } from "react-router-dom";
import './style.css';



const Footer = () => {
    return(
        <>
            <footer>

            <ul className="footer">
        <Link to="/home" className="items">☕️ Accueil ☕️</Link>
        <Link to="/contact" className="items">☕️ Contact ☕️</Link>
            </ul>
            
            
            </footer>
         </>
    )}

    export default  Footer;