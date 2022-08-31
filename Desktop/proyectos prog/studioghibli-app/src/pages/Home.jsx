import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const Home = () => {

    return(
        <section className='container' id='container'>
            <div className='container_home'>
                <div className='brand'>
                    <img src={Logo} alt='Logo'/>
                </div>
                <p>This is a fanpage made with the Studio Ghibli API</p>
            <Link to={'/films'} className='home_link'>Take a look at the movies</Link>
            </div>
        </section>
    );
}

export default Home;