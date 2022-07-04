// import { loadMain } from "./film"

// const loadSingleMovie = async () => {
//     try {
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
        
//     } catch (error) {
//       console.log(error)  
//     }
       
//     }
// loadSingleMovie()