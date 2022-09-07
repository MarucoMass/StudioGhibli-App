const baseURL = 'https://ghibliapi.herokuapp.com/';

export const getFilms = async (films) => {
  const res = await fetch(baseURL+films);
  return res.json();
}

export const getFilmsID = async (id) => {
  const res = await fetch(baseURL+'films/'+id);
  return res.json();
}