import React, { useMemo } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../styleComponents.css"
import HomeSection from './HomeSection'

function HomeContent() {

  const moviesType = useMemo(() => [
    {
      movieType: "Trending Movies",
      getMovies: "trendingMovies",
    },
    {
      movieType: "Trending TV Shows",
      getMovies: "trendingTvShows",
    },
    {
      movieType: "Upcoming",
      getMovies: "upcoming",
    },
    {
      movieType: "Popular Movies",
      getMovies: "popularMovies",
    },
    {
      movieType: "Explore Movies",
      getMovies: "topRatedMovies",
    },
    {
      movieType: "Explore TV Shows",
      getMovies: "topRatedTvShows",
    }
  ], []);
  
  return (
    <div>
      {moviesType.map((movieType) => (
          <HomeSection  key={movieType.movieType}
          {...movieType}/>
      ))}
    </div>
  )
}

export default HomeContent;