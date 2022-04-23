import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Starships = () => {
  const [starships, setStarships] = useState([])

  async function fetchStarships(url) {
    const starships = await fetch(url)
    return await starships.json()
  }

  useEffect(() => {
    fetchStarships('https://swapi.dev/api/starships/').then((response) => {
      // console.log(response.results)
      setStarships([...response.results])
    })
  }, [])

  if (starships) {
    return (
      <>
        <div>Starships</div>
        {starships.map((starship, idx) => {
          // console.log(starship.url.split('starships')[1].split('/')[1])
          // console.log(starship)
          const starshipId = starship.url.split('starships')[1].split('/')[1]
          return (
            <div key={idx}>
              <Link to={`/starship/${starshipId}`}>
                <div>{starship.name}</div>
              </Link>
            </div>
          )
        })}
      </>
    )
  }
}

export default Starships
