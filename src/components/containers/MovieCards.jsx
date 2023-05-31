import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { API_URL, API_KEY } from "../../config";
import Cards from "../Cards";
import'../../styles/contenedorCards.css'

const MovieCards = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    axios
      .get(
        
        `${API_URL}movie/${
          type ? type : "popular"
        }?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => {
       
        setMovieList(res.data.results)});
  
  }, [type]);

  
  

  
   

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieCards;
