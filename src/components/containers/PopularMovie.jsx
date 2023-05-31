import  { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {POPULAR_MOVIE_URL,URL_IMAGE} from '../../config'
import axios from 'axios'
import '../../styles/popularMovies.css'


const PopularMovies = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        axios.get(POPULAR_MOVIE_URL)
        
        .then(res => setPopularMovies(res.data.results))
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} key={movie.id} >
                                <div className="posterImage">
                                    <img src={`${URL_IMAGE +  movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
               
            </div>
        </>
    )
}
export default PopularMovies