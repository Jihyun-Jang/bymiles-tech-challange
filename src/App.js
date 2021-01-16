import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from './Signin';
import PolicyDetail from './PolicyDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Signin />
        </Route>
        <Route path="/policy-detail">
          <PolicyDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
