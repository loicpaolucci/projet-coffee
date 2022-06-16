import { Link } from "react-router-dom";
import './style.css'
import Footer from "../components/Footer";

const Home = () => {
    return(
        <>
        <h1>Bienvenu sur </h1><h1 className="cof">Coffee-Shop.com</h1>
        <p className="prod"><Link to="/product" className="prod">Produits</Link></p>

        <Footer />
        </>
 )
};

export default Home;