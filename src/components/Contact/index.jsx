import { Link } from 'react-router-dom';
import './style.css'

const Contact = () => {
    return(
        <>
        <h1>Contact</h1>

        <section className='container3'>
            <div className='card-c'>
                <div className='card-image car-4'></div>
                <h2>Lucciarini Arnaud</h2>
                <br></br>
                <p>Formation THP Projet-crash-test</p>
            </div>
            <div className='card-c'>
                <div className='card-image car-5'></div>
                <h2>Benaceur Adrien</h2>
                <br></br>
                <p>Formation THP Projet-crash-test</p>            </div>
            <div className='card-c'>
                <div className='card-image car-6'></div>
                <h2>Paolucci Loic</h2>
                <br></br>
                <p>Formation THP Projet-crash-test</p>
            </div>
        </section>



        <p className='but'><Link to='/home'className="btn">👉Accueil👈</Link></p>

        </>
    )};

    export default Contact;