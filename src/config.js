const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY= '8fac67b3e8be3a5e2f40bf3d7c852337';

const SEARCH_URL=`${API_URL}search/movie?api_key=${API_KEY}&query=`
const POPULAR_MOVIE_URL=`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`

const IMAGE_PATH= 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
const URL_IMAGE= 'https://image.tmdb.org/t/p/original/'

export{
    API_URL,
    API_KEY,
    SEARCH_URL,
    POPULAR_MOVIE_URL,
    IMAGE_PATH,
    URL_IMAGE
}