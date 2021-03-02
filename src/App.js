import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Background from "./components/parts/Background";
import Showcase from "./components/parts/Showcase";
import Navbar from "./components/parts/Navbar";
import Container from "./components/presentational/Container";
import Routes from "./Routes";

function App() {
  const [appHeight, setAppHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => setAppHeight(window.innerHeight));
  }, []);

  return (
    <Router>
      <div className="App">
        <Background />
        <div className="site-wrapper">
          <Showcase appHeight={appHeight} />
          <Container>
            <Navbar />
            <Routes appHeight={appHeight} />
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;
