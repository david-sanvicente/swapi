import React, { useEffect, useState } from 'react'

const Character = ({ url }) => {
  const [character, setCharacter] = useState([])

  async function fetchCharacter(url) {
    const character = await fetch(url)
    return await character.json()
  }

  useEffect(() => {
    fetchCharacter(url).then((res) => {
      setCharacter(res)
    })
  }, [])

  return <div>{character.name}</div>
}

export default Character
