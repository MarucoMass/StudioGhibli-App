import { Link } from "react-router-dom";

const ItemDetailMovie = ({item}) => {
    return(
        <>
        {
        item && item.movie_banner ?
        <>
        <div className='container_title'>
            <Link to={'/films'} className='back'>Go back</Link>
            <h1>{item.title}</h1>
        </div>
        <div className="singleMovie_box">
            <div className='singleMovie_boxImg'>
                <img src={item.movie_banner} alt='Banner del film' />
            </div>
            <div className='singleMovie_box_content'>
                <p className='singleMovie_description'>Director: {item.director}</p>
                <p className='singleMovie_description'>Producer: {item.producer}</p>
                <p className='singleMovie_description'>Original title: {item.original_title}</p>
                <p className='singleMovie_description'>Original title romanised: {item.original_title_romanised}</p>
                <p className='singleMovie_description'>Release date: {item.release_date}</p>
                <p className='singleMovie_description'>Description: {item.description}</p>
            </div>
        </div>
        </>
        :  <div className='loadContain'>
                <p>Loading...</p>    
                <div className='loadBox'>
                    <div className='loadCharge'></div>
                </div>
            </div>

        }
        </>
    );
}

export default ItemDetailMovie;