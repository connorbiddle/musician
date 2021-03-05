import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Background from "./components/parts/Background";
import Showcase from "./components/parts/Showcase";
import Navbar from "./components/parts/Navbar";
import Container from "./components/presentational/Container";
import Routes from "./Routes";
import { throttled } from "./utilities";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", throttled(updateScrollPosition, 50));
  }, []);

  return (
    <Router>
      <div className="App">
        <Background scrollPosition={scrollPosition} />
        <div className="site-wrapper">
          <Showcase />
          <Container>
            <Navbar scrollPosition={scrollPosition} />
            <Routes />
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;
