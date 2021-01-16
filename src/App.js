import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import PolicyDetail from './PolicyDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/policy-detail">
          <PolicyDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
