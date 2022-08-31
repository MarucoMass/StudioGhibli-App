import { Link } from 'react-router-dom';
const ItemMovie = ({id, title, image}) => {
    return(
        <div className='card' key={id}>
            <img src={image} alt='Banner del film' />
                <h3 className='card_title'>{title}</h3>
                <Link to={`/films/${id}`} className='card_btn'>See more +</Link>
        </div>
    );
}
export default ItemMovie;