import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Fav from './components/Fav';
import Footer from './components/Footer';


class App extends React.Component {

  render() {
    return(
      <>
        <Router>
          <Header/>
          <Switch>

            <Route  path="/"exact>
              <Home/>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;