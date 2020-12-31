import { useState, useEffect } from 'react'
import { getGames } from '../services/games'

function Games() {
    const [games, setGames] = useState([])

  useEffect(() => {
    getGames()
    .then(data => {
      console.log({data})
      setGames(data)
    })
  }, [])
    return (
        <>
          <p>Games Inventory</p>
          {games.map(borrower => (
            <div key={borrower.name} className={borrower.name}>{borrower.name}</div>
            ))}
        </>
    )
}

export default Games