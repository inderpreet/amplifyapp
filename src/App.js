import brand from "./assets/img/bot-row.png";

function App() {
  return (
    <div className="App image-frame container">
      <div className="row top-row align-items-center">
        <div className="col-9 h2">
          Detached Backsplit 5 Bunglow: <br /> Sold: 2,20,000 Over Asking
        </div>
        <div className="col h3 top-row-right" style={{ color: "white" }}>
          HIGHEST IN THE STREET
        </div>
      </div>
      <div className="row row-two">
        <div className="col-8">
          <div className="row g-2">
            <div className="col">
              <div className="img1"></div>
            </div>
            <div className="col">
              <div className="img2"></div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="img3"></div>
            </div>
          </div>
        </div>
        <div className="col align-items-center g-0">
          <div className="row desc g-0">
            <ul>
              <li>Fully Renovated</li>
              <li>3+3 Bedrooms 4 Washrooms</li>
              <li>Finished Basement</li>
              <li>A Huge Backyard</li>
              <li>Close to Amenities</li>
            </ul>
          </div>
          <div className="row g-2">
            <div className="col">
              <div className="img4"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-bottom">
        <img src={brand} alt="brand image" className="brand" />
      </div>
    </div>
  );
}

export default App;
