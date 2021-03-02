import { Route, Switch } from "react-router-dom";
import Store from "./components/pages/Store";
import Live from "./components/pages/Live";
import Subscribe from "./components/pages/Subscribe";
import Product from "./components/pages/Product";

const Routes = ({ appHeight }) => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Store appHeight={appHeight} />} />
      <Route exact path="/live" render={() => <Live appHeight={appHeight} />} />
      <Route
        exact
        path="/subscribe"
        render={() => <Subscribe appHeight={appHeight} />}
      />
      <Route
        exact
        path="/product/:slug"
        render={routeProps => (
          <Product appHeight={appHeight} slug={routeProps.match.params.slug} />
        )}
      />
    </Switch>
  );
};

export default Routes;
