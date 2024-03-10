import { useState } from "react";
import "../styles/Games.css";
import { Gamertag } from "../components/Gamertag";

export function Games() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="db-background"></div>
      <div className="games-page">
        {/* DASHBOARD HEADER */}
        <div className="db-header">
          <h1>Games</h1>
        </div>

        {/* DASHBOARD BODY */}
        <div className="db-body">
          <div className="db-topmenu">
            <Gamertag nickname="RedSantar" />
            <img
              className="xbox-logo"
              src="src/assets/xbox_360_logo.svg"
              alt="Xbox 360 logo"
            />
          </div>

          <div className="db-menu">
            <div className="db-menu-options">
              <button className="db-button">Games Library</button>
              <button className="db-button">Achivements</button>
              <button className="db-button">Played Games</button>
            </div>
            <p className="db-button-info">
              Play games on your consoles: demos blbalblalba
            </p>
          </div>

          {/* open tray */}
          <div className="db-submenu">
            <h2>Open Tray</h2>
          </div>
        </div>

        {/* DASHBOARD FOOTER */}
        <div className="db-footer">
          <img
            className="xbox-controller-button"
            src="src/assets/Xbox_button_Y.svg"
            alt="Xbox 360 logo"
          />
          <img
            className="xbox-controller-button"
            src="src/assets/Xbox_button_X.svg"
            alt="Xbox 360 logo"
          />
          <h2>Sign out</h2>
          <img
            className="xbox-controller-button"
            src="src/assets/Xbox_button_B.svg"
            alt="Xbox 360 logo"
          />
          <h2>Select</h2>
          <img
            className="xbox-controller-button"
            src="src/assets/Xbox_button_A.svg"
            alt="Xbox 360 logo"
          />
        </div>
      </div>
    </>
  );
}
