import  { useState } from "react";
import axios from 'axios'
import '../../styles/search.css'

import SearchMovie from "../SearchMovie";

const Search= () => {
  const TMDB_KEY = "afcc4e756d500720208345094fe13a77";

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const changeHandler = (e) => {
    e.preventDefault();

    let keyword = e.target.value;

    setQuery(keyword);

    axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`
    )
      
      .then((res) => {
        if (!res.data.errors) {
          setResults(res.data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    
      <div className="container">
        
          <div className="wrapper">
            <input
            className="input"
              type="text"
              value={query}
              onChange={changeHandler}
              placeholder="Search For Movie.." 
            />
          </div>

          {results && (
            <ul className="results">
              {results.map((movie, index) => (
                <li key={index}>
                  <SearchMovie movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      
    
  );
};

export default Search;