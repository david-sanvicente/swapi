import React, { useState, useEffect } from 'react'
import Character from '../Components/Character'
import { Link } from 'react-router-dom'

const Characters = () => {
  const [characters, setCharacters] = useState([])

  async function fetchCharacters() {
    const people = await fetch('https://swapi.dev/api/people/')
    const result = await people.json()
    return result
  }

  useEffect(() => {
    fetchCharacters().then((res) => {
      setCharacters([...res.results])
    })
  }, [])
  if (characters) {
    return (
      <div>
        {characters.map((character, idx) => {
          // console.log('character', character.url.split('people')[1].split('/')[1])
          const characterId = character.url.split('people')[1].split('/')[1]
          console.log(characterId)
          return (
            <div>
              <Link to={`/character/${characterId}`}>
                <Character key={idx} url={character.url} />
              </Link>
            </div>
          )
          // <Character key={idx} url={character.url} />
        })}
      </div>
    )
  }
}

export default Characters
