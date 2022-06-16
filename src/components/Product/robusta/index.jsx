import { Link } from 'react-router-dom';
import './style.css'

const Robusta = () => {
    return(

        <>
        <h1>cafe Robusta</h1>


        <section className='container2'>
            <div className='card'>
                <div className='card-image car-1'></div>
                <h2>café robusta</h2>
                <p>lorem</p>
            </div>
        </section>





            <p className='p'><Link to='/product' className='p'> 👈retour</Link></p>
        </>
 )};

    export default Robusta;