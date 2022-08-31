import ItemMovie from "./ItemMovie";

const ItemListMovies = ({movieList}) => {
    return(
        <div className="container_films">
            {
                movieList.map(elem => <ItemMovie key={elem.id} id={elem.id} title={elem.title} image={elem.image}/>)
            }
        </div>
    );
}

export default ItemListMovies;