import React from "react";
import NoMatch from './pages/NoMatch';
import Detail from './pages/Detail';
import Saved from './pages/Saved';
import Search from './pages/Search';
import Nav from './components/Nav';
import { HashRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
          <Route exact path="/">
            <Search/>
          </Route>
          <Route exact path="/saved">
            <Saved/>
          </Route>
          <Route exact path="/books/:id">
            <Detail/>
          </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
