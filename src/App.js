import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "pages/home";
import ShipmentDetailsByID from "pages/shipment/[id]";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/shipment/:id">
          <ShipmentDetailsByID />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
