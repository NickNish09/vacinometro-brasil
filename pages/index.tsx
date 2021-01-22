import { SVGMap } from "react-svg-map";
import Brazil from "../lib/custom-brazil.regions";

const HomePage = () => (
  <div>
    <div className="map-container">
      <SVGMap
        map={Brazil}
        onLocationClick={(e) =>
          console.log((e.target as HTMLElement).getAttribute("name"))
        }
      />
    </div>
  </div>
);

export default HomePage;
