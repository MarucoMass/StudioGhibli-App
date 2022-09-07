import ItemListMovies from '../components/ItemListMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { loadMain } from '../api/db';
import { getFilms } from '../components/api';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const Movies = () => {

    const [movies, setMovies] = useState([]);
    const { films } = useParams();
    useEffect(() => {
        getFilms(films)
        .then(result => setMovies(result))
        .catch(error => console.log(error))
    }, [films])

    useEffect(() => {
        return (() => {
            setMovies([]);
        })
    }, []);

    return(
        <section className='container'>
            
                { movies.length > 0 
                    ?
                    <>
                    <div className='container_title'>
                         <Link to={'/'} className='back'>Go back</Link>
                         <h1>Studio Ghibli films</h1>
                    </div>
                    <ItemListMovies movieList={movies}/>
                    </>
                    : <div className='loadContain'>
                        <p>Loading...</p>    
                        <div className='loadBox'>
                            <div className='loadCharge'></div>
                        </div>
                    </div>
                }
            <Footer />
        </section>
    );
}

export default Movies;