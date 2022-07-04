 const loadMain = async () => {
    try {
        const data = await fetch("https://ghibliapi.herokuapp.com/films");

        if(data.status === 200){
            const result = await data.json()
			let films = '';
			result.forEach(film => {
				films += `
					<div class="pelicula" id="${film.id}">
                        <img src="${film.movie_banner}" alt="Banner del film" >
                        <h3 class="titulo">${film.title}</h3>
                        <button href="../pelicula.html" class="btnVerMas" value="${film.id}">See more +</button>
                    </div>
                        `;
                        // <a href="../pelicula.html" class="btnVerMas" value="${film.id}">Ver más +</a>
                    });
     
                if (result.length == -1) {
                    document.getElementById("container_films").innerHTML =  
                    `  <div class="loadContain">
                            <p>Loading...</p>    
                            <div class="loadBox">
                            <div class="loadCharge"></div>
                            </div>
                        </div>`
                } else {

                    document.getElementById("container_films").innerHTML = films 
                }
       	

                const btn = document.querySelectorAll('.btnVerMas')

                btn.forEach((e) =>
                  e.addEventListener("click", async (e) => {
                    let id = e.target.value
                    let dataFilm = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
                    let resultFilm = await dataFilm.json()
                    console.log(resultFilm)
                    let {title, description, director, producer, movie_banner, original_title, original_title_romanised, release_date } = resultFilm;
                    
                    let titulo = document.querySelector(".container_title h1");
                    
                    titulo.innerHTML = title;
                    document.getElementById("container_films").innerHTML = `
                    <div class="singleMovie_box" id="${id}">
                        <div class="singleMovie_boxImg">
                            <img src="${movie_banner}" alt="Banner del film" >
                        </div>
                        <div class="singleMovie_box_content">
                            <p class="singleMovie_description">Director: ${director}</p>
                            <p class="singleMovie_description">Producer: ${producer}</p>
                            <p class="singleMovie_description">Original title: ${original_title}</p>
                            <p class="singleMovie_description">Original title romanised: ${original_title_romanised}</p>
                            <p class="singleMovie_description">Release date: ${release_date}</p>
                            <p class="singleMovie_description">Description: ${description}</p>
                        </div>

                    </div>
                `;
                })
                )
       
		} else if(data.status === 401){
			console.log("Wrong key");
		} else if(data.status === 404){
			console.log("Not found");
		} else {
			console.log("There was an error");
		}
    } catch (error) {
        console.log(error)
    }
}
loadMain();


// const loadSingleMovie = () => {
//     const pelicula = document.querySelectorAll(".pelicula")
//     pelicula.forEach((e) =>
//       e.addEventListener('click', async (e) => {
//         let id = e.target.value
//         let dataFilm = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
//         let resultFilm = await dataFilm.json()
//         let {title, description, director, producer, movie_banner, original_title, original_title_romanised, release_data } = resultFilm;
//         console.log(resultFilm)
//         document.getElementById('container_singleFilm').innerHTML = `
//         <div class="pelicula" id="${id}">
//             <img src="${movie_banner}" alt="Banner del film" >
//             <h3 class="titulo">${title}</h3>
//             <p class="titulo">${description}</p>
//         </div>
//     `;
//     })
//     )
// }
