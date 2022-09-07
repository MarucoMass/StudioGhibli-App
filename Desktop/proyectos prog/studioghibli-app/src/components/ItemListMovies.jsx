import ItemMovie from "./ItemMovie";
import Footer from './Footer';
const ItemListMovies = ({movieList}) => {
    return(
        <div className="container_films">
            {
                movieList.map(elem => <ItemMovie key={elem.id} id={elem.id} title={elem.title} image={elem.image}/>)
            }
            {/* <Footer /> */}
        </div>
    );
}

export default ItemListMovies;