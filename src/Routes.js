import { Route, Switch } from "react-router-dom";
import Store from "./components/pages/Store";
import Live from "./components/pages/Live";
import Subscribe from "./components/pages/Subscribe";
import Product from "./components/pages/Product";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Store />} />
      <Route exact path="/live" render={() => <Live />} />
      <Route exact path="/subscribe" render={() => <Subscribe />} />
      <Route
        exact
        path="/product/:slug"
        render={({ match }) => <Product slug={match.params.slug} />}
      />
    </Switch>
  );
};

export default Routes;
