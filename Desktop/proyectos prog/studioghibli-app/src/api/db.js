export const loadMain = async (db) => {
    try {
        const data = await fetch(`https://ghibliapi.herokuapp.com/${db}`);

        if(data.status === 200){
            const result = await data.json()
			return result;

		} else if(data.status === 401){
			console.log('Wrong key');
		} else if(data.status === 404){
			console.log('Not found');
		} else {
			console.log('There was an error');
		}
    } catch (error) {
        console.log(error)
    }
}
export const loadFilm = async (id) => {
    try {
        const dataMovie = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);

        if(dataMovie.status === 200){
            const resultMovie = await dataMovie.json()
			return resultMovie;

		} else if(dataMovie.status === 401){
			console.log('Wrong key');
		} else if(dataMovie.status === 404){
			console.log('Not found');
		} else {
			console.log('There was an error');
		}
    } catch (error) {
        console.log(error)
    }
}

