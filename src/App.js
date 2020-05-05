import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import CreateTournament from "./components/create-tournament.component";
import CreateUser from "./components/create-user.component";
import Participant from "./components/participant.component";
import Match from "./components/match.component";
import DisplayBracket from "./components/tournament-bracket.component"
import management from "./components/management.component";

function App() {
  return (
   <Router>
     <div className="container">
       <Navbar />
        <br/>
        <Route path="/create" component={CreateTournament} />
        <Route path="/participant" component={Participant} />
        <Route path="/match" component={Match} />
        <Route path="/management" component={management} />
        <Route path="/brackets" component={DisplayBracket} />
     </div>
   </Router>
  );
}

export default App;
