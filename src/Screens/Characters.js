import React, { useState, useEffect } from 'react'
import Character from '../Components/Character'

const Characters = () => {
  const [characters, setCharacters] = useState([])

  async function fetchCharacters() {
    const people = await fetch('https://swapi.dev/api/people/')
    const result = await people.json()
    return result
  }

  useEffect(() => {
    fetchCharacters()
      .then((res) => {
        setCharacters([...res.results])
      })
      .then(() => {
        console.log(characters)
      })
  }, [])

  return (
    <div>
      {characters.map((character, idx) => {
        console.log('character', character)
        return <Character key={idx} url={character.url} />
      })}
    </div>
  )
}

export default Characters
