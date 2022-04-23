import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Film from '../Components/Film'

const CharacterDetails = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState([])

  async function fetchCharacterDetails(charId) {
    const character = await fetch(`https://swapi.dev/api/people/${charId}`)
    return await character.json()
  }

  useEffect(() => {
    fetchCharacterDetails(id).then((res) => {
      setCharacter(res)
    })
  }, [])

  console.log('character', character)
  if (character.films) {
    return (
      <>
        <div>CharacterDetails</div>
        <h1>{character.name}</h1>
        <h3>Film appearances:</h3>
        {character.films.map((url, idx) => {
          const filmId = url.split('films')[1].split('/')[1]
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

export default CharacterDetails
