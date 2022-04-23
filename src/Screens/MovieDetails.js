import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Character from '../Components/Character'

const MovieDetails = () => {
  const [episode, setEpisode] = useState([])
  const { id } = useParams()

  async function fetchEpisode(id) {
    const episode = await fetch(`https://swapi.dev/api/films/${id}`)
    return await episode.json()
  }

  useEffect(() => {
    fetchEpisode(id).then((res) => {
      setEpisode(res)
    })
  }, [])

  if (episode.characters) {
    // console.log('episode', episode)
    return (
      <>
        <div>MovieDetails</div>
        <h2>{`Episode ${id} - ${episode.title}`}</h2>
        <p>{episode.opening_crawl}</p>
        <h3>Characters</h3>
        {episode.characters.map((url, idx) => {
          const characterId = url.split('people')[1].split('/')[1]
          return (
            <div key={idx}>
              <Link to={`/character/${characterId}`}>
                <Character key={idx} url={url} />
              </Link>
            </div>
          )
        })}
      </>
    )
  }
}

export default MovieDetails
