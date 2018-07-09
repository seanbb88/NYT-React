import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoMatch from './Pages/NoMatch'; 
import Home from './Pages/Home'; 

const App = () => (
  <Router>
    <div>
      {/* <Nav /> Add this NAV as a header. . This will not change since its outside the switch */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
      {/* <Footer />Add this Footer as a footer. . This will not change since its outside the switch */}
      </div>
    </Router>
)

export default App;
