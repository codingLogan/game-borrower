import { useEffect, useState } from 'react'
import { getUsers } from '../services/users'

const mockBorrowers = [
    {name: "Bowser"},
    {name: "Mario", ui_test: "active_item"},
    {name: "Luigi"},
    {name: "Samus"},
  ]

function Borrowers() {
  const [borrowers, setBorrowers] = useState([])

  useEffect(() => {
    getUsers()
    .then(data => {
      console.log({data})
      setBorrowers(data)
    })
  }, [])
    return (
        <>
          <p>Game Borrowers</p>
          {borrowers.map(borrower => (
            <div key={borrower.name} className={borrower.name}>{borrower.name}</div>
            ))}
        </>
    )
}

export default Borrowers