import './style.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return(
        <header>
            <div className='navContainer'>
                <div className='title'>
                    <h1>Aulas</h1>
                </div>
                <nav className='menuNav'>
                    <Link to="/">Home</Link>
                    <Link to="/about">Sobre</Link>
                    <Link to="/contact">contact</Link>
                </nav>
            </div>
        </header>
    );
};