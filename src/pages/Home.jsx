import MovieCards from "../components/containers/MovieCards"
import PopularMovies from "../components/containers/PopularMovie"
import Search from "../components/containers/Search"


const Home = () => {
  return (
    <div>
        <PopularMovies/>
        <Search/>
        <MovieCards />
    </div>
  )
}

export default Home