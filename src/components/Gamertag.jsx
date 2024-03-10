export function Gamertag({ nickname }) {
  return (
    <div className="gamertag">
      <div className="gt-header">
        <span className="gt-header-tag">RedSantar</span>
      </div>

      <div className="gt-body">
        <img
          className="gt-image"
          alt="Book cover"
          src={`https://unavatar.io/twitter/${nickname}`}
        />
        <div className="gt-info">
          <span className="gt-info-tag">Games {nickname}</span>
          <span className="gt-info-tag">&#127318;amerscore {nickname}</span>
          <span className="gt-info-tag">Achivements {nickname}</span>
        </div>
      </div>
    </div>
  );
}
