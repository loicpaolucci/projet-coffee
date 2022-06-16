import './style.css';
import { Link } from 'react-router-dom';

const Arabica = () => {
    return(

       
        <div className='arabica'>
        <h1>Café Arabica</h1>
        <section className='container2'>
            <div className='card'>
                <div className='card-image car-1'></div>
                <h2>Café Arabica : </h2>
                <br></br>
                <p>Café doux et subtil</p>
            </div>
        </section>

        <p className='p'><Link to='/product' className='p'>👈RETOUR</Link></p>
        </div>
       
    )}

    export default Arabica;