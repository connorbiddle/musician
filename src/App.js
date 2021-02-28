import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Background from "./components/parts/Background";
import Showcase from "./components/parts/Showcase";
import Navbar from "./components/parts/Navbar";
import Container from "./components/presentational/Container";
import GlobalStyles from "./styles/globalStyles";
import Store from "./components/pages/Store";
import Live from "./components/pages/Live";
import Subscribe from "./components/pages/Subscribe";

function App() {
  const [appHeight, setAppHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => setAppHeight(window.innerHeight));
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <div className="App">
        <Background />
        <div className="site-wrapper">
          <Showcase appHeight={appHeight} />
          <Container>
            <Navbar />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Store appHeight={appHeight} />}
              />
              <Route
                exact
                path="/live"
                render={() => <Live appHeight={appHeight} />}
              />
              <Route
                exact
                path="/subscribe"
                render={() => <Subscribe appHeight={appHeight} />}
              />
            </Switch>
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;
