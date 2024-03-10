import { useState } from "react";
import "../styles/Games.css";
import { Gamertag } from "../components/Gamertag";

export function Games() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="games-page">
        <h1>Games</h1>

        <Gamertag nickname="RedSantar" />
      </div>
    </>
  );
}
