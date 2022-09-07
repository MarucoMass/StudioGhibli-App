import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailMovie from "./ItemDetailMovie";
// import { loadFilm } from "../api/db";
import { getFilmsID } from './api';
import Footer from './Footer';
const ItemDetailContainerMovie = () => {

    const [movie, setMovie] = useState({});
    const { idFilm } = useParams();

    useEffect(() => {

        getFilmsID(idFilm)
            .then(result => setMovie(result))
            .catch(error => console(error))     
    }, [idFilm])

    return(
        <div className='container'>
             <ItemDetailMovie item={movie} key={movie.id}/>
             <Footer />
        </div>
    );
}

export default ItemDetailContainerMovie;