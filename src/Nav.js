import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BackboneModelExample from "./BackboneModelExample"
import ExtractingDataFromBackboneModelExample from "./ExtractingDataFromBackboneModelExample";
import logo from "./logo.svg";

export default function Nav () {
  return (
    <Router>
      <header className="App-header">
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/">Home</Link>
        <Link to="/backbone-model-example">Backbone Model Example</Link>
        <Link to="/extracting-data-from-backbone-model-example">
          Extracting Data from Backbone Model Example
        </Link>
        <br />
      </header>
      <Switch>
        <Route path="/backbone-model-example">
          <BackboneModelExample />
        </Route>
        <Route path="/extracting-data-from-backbone-model-example">
          <ExtractingDataFromBackboneModelExample />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}