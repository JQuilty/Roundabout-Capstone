import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar.component"
import CreateEvent from "./components/create-event.component";
import management from "./components/management.component";
import DisplayBracket from "./components/tournament-bracket.component"

function App() {
  return (
   <Router>
     <div className="container">
       <Navbar />
        <br/>
        <Route path="/" exact component={DisplayBracket} />
        <Route path="/create" component={CreateEvent} />
        <Route path="/management" component={management} />
        <Route path="/brackets" component={DisplayBracket} />
     </div>
   </Router>
  );
}

export default App;