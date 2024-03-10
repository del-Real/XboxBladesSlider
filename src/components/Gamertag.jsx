export function Gamertag({ nickname }) {
    return (
      <div className="gamertag">
         <img
        className="gt-image"
        alt="Book cover"
        src={`https://unavatar.io/twitter/${nickname}`}
      />
       <div className="user-info">
        <span className="gt-info">Games {nickname}</span>
        <span className="gt-info">&#127318;amerscore {nickname}</span>
        <span className="gt-info">Achivements {nickname}</span>
        </div>
    </div>
    );
  }