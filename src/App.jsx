import "./styles/App.css";
import { Slider } from "./pages/Slider.jsx";
import { Marketplace } from "./pages/Marketplace";
import { XboxLive } from "./pages/XboxLive";
import { Games } from "./pages/Games";
import { Media } from "./pages/Media";
import { System } from "./pages/System";

function App() {
  const pages = [
    <Marketplace />,
    <XboxLive />,
    <Games />,
    <Media />,
    <System />,
  ];

  return (
    <>
      <Slider>
        {pages.map((page, index) => (
          <div key={index} className="user-class">
            {page}
          </div>
        ))}
      </Slider>
    </>
  );
}

export default App;
