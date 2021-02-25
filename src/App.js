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
  return (
    <Router>
      <GlobalStyles />
      <div className="App">
        <Background />
        <div className="site-wrapper">
          <Showcase />
          <Container>
            <Navbar />
            <Switch>
              <Route exact path="/" render={() => <Store />} />
              <Route exact path="/live" render={() => <Live />} />
              <Route exact path="/subscribe" render={() => <Subscribe />} />
            </Switch>
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;
