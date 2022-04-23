import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Character from '../Components/Character'
import Film from '../Components/Film'

const StarshipDetails = () => {
  const { id } = useParams()
  const [starship, setStarship] = useState([])

  async function fetchStarship(url) {
    const starships = await fetch(url)
    return await starships.json()
  }

  useEffect(() => {
    fetchStarship(`https://swapi.dev/api/starships/${id}`).then((res) => {
      setStarship(res)
    })
  }, [])

  console.log('starship', starship.films)

  if (starship.films) {
    return (
      <>
        <div>StarshipDetails</div>
        <h1>{starship.model}</h1>
        <h3>Film Appearances:</h3>
        {starship.films.map((url, idx) => {
          const filmId = url.split('films')[1].split('/')[1]
          console.log(filmId)
          return (
            <div key={idx}>
              <Link to={`/episode/${filmId}`}>
                <Film key={idx} url={url} />
              </Link>
            </div>
          )
        })}
      </>
    )
  }
}

export default StarshipDetails
