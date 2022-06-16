import { Link } from "react-router-dom";
import './style.css'
import Footer from "../components/Footer";

const Home = () => {
    return(
        <>
        <h1>HOME</h1>
        <Link to="/product" className="prod">Produits</Link>

        <Footer />
        </>
 )
};

export default Home;