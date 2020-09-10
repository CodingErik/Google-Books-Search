import React from "react";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Saved from "./pages/Saved"; 
import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav/>
        <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/books" component={Search} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/*" component={NoMatch} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
