
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bg2 from '../assets/video/Espacio.mp4'
import "../styles/welcome.css"

const WelcomeScreen = () => {

    return (
        <div>
            <video autoPlay loop muted src={Bg2}></video>
            <div className='WelView'>
                <h1>Bienvenido y se parte del Futuro</h1>
                
                <p>Queremos brindarte la mejor experiencia y por eso te damos a la bienvenida a nuestro portal, <br /> esperamos que disfrutes de nuestros servicios para que nos vuelvas a visitar
                </p>
                <Link to="/devices">
                    <Button>Continue</Button>
                </Link>
            </div>
            
        </div>
    );
};

export default WelcomeScreen;