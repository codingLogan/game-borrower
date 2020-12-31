import { useEffect, useState } from "react";
import { getUsers } from "../services/users";

function Borrowers() {
  const [borrowers, setBorrowers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      console.log({ data });
      setBorrowers(data);
    });
  }, []);
  return (
    <>
      <p>
        <strong>Game Borrowers</strong>
      </p>
      {borrowers.map((borrower) => (
        <div key={borrower.name} className={borrower.name}>
          {borrower.name}
        </div>
      ))}
    </>
  );
}

export default Borrowers;
