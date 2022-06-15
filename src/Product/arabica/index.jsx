import './style.css';
import { Link } from 'react-router-dom';

const Arabica = () => {
    return(

       
        <div className='arabica'>
        <h1>Café Arabica</h1>
        <section className='container2'>
            <div className='card'>
                <div className='card-image car-1'></div>
                <h2>café arabica</h2>
                <p>lorem</p>
            </div>
        </section>

        <p className='p'><Link to='/product' className='p'>👈retour</Link></p>
        </div>
       
    )}

    export default Arabica;