import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../utils/Header';
import HeaderContent from './HeaderContent';
import PlaylistContent from './PlaylistContent';
import { getMovieFromPlaylist } from '../../api/Playlist';

function PlaylistPage() {
  const location = useLocation();
  const { playlist } = location.state || {};

  const [moviesList, setMoviesList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);


  const fetchMovies = async () => {
    try {
      const movies = await getMovieFromPlaylist(playlist.id);
      setMoviesList(movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  const sortByName = () => {
    const sortedMovies = [...moviesList].sort((a, b) => {
      // Sortare alfabetică după nume
      return a.movieName.localeCompare(b.movieName);
    });
    setMoviesList(sortedMovies);
  };

  const sortByDateAdded = () => {
    const sortedMovies = [...moviesList].sort((a, b) => {
      // Sortare după dată adăugată
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    });
    // Actualizare starea moviesList cu lista sortată
    setMoviesList(sortedMovies);
  };

  const searchMovies = (movieName) => {
    const foundMovies = [];

    if(movieName == ""){
      fetchMovies();
    }
    else{
      for (const movie of moviesList) {
        if (movie.movieName.toLowerCase().includes(movieName.toLowerCase())) {
            foundMovies.push(movie);
        }
      }
      setMoviesList(foundMovies);
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      searchMovies(searchValue);
    }, 600);

    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    setSearchTimeout(timeout);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };

  }, [searchValue]);


  useEffect(() => {
    fetchMovies();
  }, [playlist.id]); // Apelați fetchMovies atunci când se schimbă id-ul playlist-ului


  return (
    <div className='bg-black h-full flex-1 overflow-y-auto py-2'>
        <div className='
             bg-neutral-900
             rounded-lg
             h-full
             w-full
             overflow-hidde
             overflow-y-auto
             '>
              <Header  
                // backdropPath={process.env.PUBLIC_URL + '/loginImage.jpg'}
                className='h-3/4 bg-gradient-to-b from-yellow-400'
              >
              <HeaderContent playlist={playlist} moviesList={moviesList}/>
              </Header>
              <PlaylistContent 
                  playlist={playlist} 
                  moviesList={moviesList}
                  fetchMovies={fetchMovies}
                  sortByName={sortByName}
                  sortByDateAdded={sortByDateAdded}
                  setSearchValue={setSearchValue}
                  searchValue={searchValue}
              />
        </div>
    </div>
  )
}

export default PlaylistPage