const baseURL = 'https://ghibliapi.herokuapp.com/';
export const loadFilms = async (films) => {
    try {
        const data = await fetch(baseURL+films);

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
export const loadFilm = async (film) => {
    try {
        const data = await fetch(baseURL+'films/'+film);

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

