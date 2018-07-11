import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoMatch from './Pages/NoMatch'; 
import Home from './Pages/Home'; 
import Header from './Pages/Header'; 
import Footer from './Pages/Footer'; 
import Search from './Pages/Search'; 
import "./index.css"; 


const App = () => (
  <Router>
    <div className="page-body">
      <Header />
      <Search />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
      </div>
    </Router>
)

export default App;
