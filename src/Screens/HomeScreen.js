import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  const [movies, setMovies] = useState([])

  async function fetchMovies() {
    const movies = await fetch('https://swapi.dev/api/films/')
    const result = await movies.json()
    return result
  }

  useEffect(() => {
    fetchMovies().then((res) => {
      setMovies([...res.results])
    })
  }, [])

  return (
    <>
      <div>HomeScreen</div>
      {movies.map((movie, idx) => {
        // console.log('movie', movie.url.split('films')[1].split('/')[1])
        const movieId = movie.url.split('films')[1].split('/')[1]
        return (
          <div key={idx}>
            <Link to={`/episode/${movieId}`}>
              <h3 key={idx}>{movie.title}</h3>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default HomeScreen
