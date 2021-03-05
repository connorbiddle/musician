import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Background from "./components/parts/Background";
import Showcase from "./components/parts/Showcase";
import Navbar from "./components/parts/Navbar";
import Footer from "./components/parts/Footer";
import Cart from "./components/parts/Cart";
import Container from "./components/presentational/Container";
import { CartContext } from "./context/CartContext";
import { throttled } from "./utilities";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const { cart } = useContext(CartContext);

  useEffect(() => {
    const updateScrollPosition = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", throttled(updateScrollPosition, 40));
  }, []);

  return (
    <Router>
      <div className="App">
        <Background scrollPosition={scrollPosition} />
        <div className="site-wrapper">
          <Showcase />
          <Container>
            <Navbar />
            <Routes />
          </Container>
          <Footer />
          {cart.length > 0 && <Cart items={cart} />}
        </div>
      </div>
    </Router>
  );
}

export default App;
