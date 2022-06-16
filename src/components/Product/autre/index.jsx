import { Link } from "react-router-dom";
import './style.css';


const Autres = () => {
    return(
        <>

            <h1>Autre type de café</h1>


            <section className='container2'>
            <div className='card'>
                <div className='card-image car-1'></div>
                <h2>Autre café</h2>
                <p>lorem</p>
            </div>
        </section>

        <p className='p'><Link to='/product' className='p'>👈retour</Link></p>
        </> 
)}

export default Autres;