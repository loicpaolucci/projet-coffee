import { Link } from "react-router-dom";
import './style.css'

const Home = () => {
    return(
        <>
        <h1>HOME</h1>
        <Link to="/product" className="prod">Produits</Link>
        </>
 )
};

export default Home;