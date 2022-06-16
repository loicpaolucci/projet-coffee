import { Link } from "react-router-dom";
import './style.css';

const Products = () => {
    return(

        <>
         <div className="container">
        <h2 className="title">Types de grains :</h2>
        <br></br>
        <h3><Link to='arabica' className="cafe">👉Arabica (doux)</Link></h3>
        <p>Variété la plus populaire , avec des notes aromatiques subtil</p>
        <br></br>
        <h3><Link to='robusta' className="cafe">👉Robusta (fort)</Link></h3>
        <p>Une variété plus corsé et contient plus de cafeine</p>
        <br></br>
        <h3><Link to='autre' className="cafe">👉Autres types de café (melange doux et fort)</Link></h3>
        <p>La plupart des types de café sont un melange des deux variétés</p>
        <br></br>
        <p><Link to='/home'className="btn">👉Accueil👈</Link></p>
        </div>
     

        
        
        
        
        
        
        
        </>
)}

export default Products;