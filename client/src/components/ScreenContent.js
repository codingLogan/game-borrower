import { useEffect, useState } from 'react'
import api from '../services/apiService'

// Mock data first
const mockBorrowers = [
    {name: "Bowser"},
    {name: "Mario", ui_test: "active_item"},
    {name: "Luigi"},
    {name: "Samus"},
  ]

function ScreenContent() {
  const [borrowers, setBorrowers] = useState([])

  useEffect(() => {
    api(`/borrowers`)
    .then(data => {
      console.log({data})
      setBorrowers(data[0].persons)
    })
  }, [])
    return (
      <>
        <em>Mock Borrowers</em><br></br>
        {mockBorrowers.map(borrower => (
          <div key={borrower.name} className={borrower.ui_test}>{borrower.name}</div>
        ))}
        <em>Data Borrowers</em><br></br>
        {borrowers.map(borrower => (
          <div key={borrower} className={borrower}>{borrower}</div>
        ))}
      </> 
    )
}

export default ScreenContent