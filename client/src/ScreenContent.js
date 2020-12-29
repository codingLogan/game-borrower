// Mock data first
const borrowers = [
    {name: "Bowser"},
    {name: "Mario", ui_test: "active_item"},
    {name: "Luigi"},
    {name: "Samus"},
  ]

function ScreenContent() {
    return (
        <>
            <em>Borrowers</em><br></br>
            {borrowers.map(borrower => (
              <div class={borrower.ui_test}>{borrower.name}</div>
            ))}
         </> 
    )
}

export default ScreenContent