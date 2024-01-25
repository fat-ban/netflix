
const API_KEY = import.meta.env.VITE_TMDB_KEY;
const language = import.meta.env.VITE_TMDB_LANG;


console.log(API_KEY)
const categories = {
    trending: `/trending/all/week?api_key=${API_KEY}&language=${language}`,
    netflixDiscover: `/discover/tv?api_key=${API_KEY}&with_networks=213&&language=${language}`,
    topRated:`/movie/top_rated?api_key=${API_KEY}&language=${language}`,
    actionMovie:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    comedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    horrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`
  
}

export default categories;