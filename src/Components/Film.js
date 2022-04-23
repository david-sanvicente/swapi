import React, { useEffect, useState } from 'react'

const Film = ({ url }) => {
  const [film, setFilm] = useState([])

  async function fetchFilm(url) {
    const film = await fetch(url)
    return await film.json()
  }

  useEffect(() => {
    fetchFilm(url).then((res) => {
      setFilm(res)
    })
  }, [])

  // console.log('film', film)

  return <div>{film.title}</div>
}

export default Film
