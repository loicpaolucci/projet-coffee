import { Link } from 'react-router-dom';
import './style.css'

const Robusta = () => {
    return(

        <>
        <h1>Café Robusta</h1>


        <section className='container2'>
            <div className='card'>
                <div className='card-image car-1'></div>
                <h2>Café Robusta</h2>
                <br></br>
                <p>Café fort avec des notes fruités</p>
            </div>
        </section>





            <p className='p'><Link to='/product' className='p'> 👈RETOUR</Link></p>
        </>
 )};

    export default Robusta;