import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import HomePage from "./components/home-page.component";
import EditTournament from "./components/edit-tournament.component";
import CreateTournament from "./components/create-tournament.component";
import CreateUser from "./components/create-user.component";
import Participant from "./components/participant.component";
import Match from "./components/match.component";
import Tournaments from "./components/tournament-list.component";

function App() {
  return (
   <Router>
     <div className="container">     
       <Navbar />
        <br/>
        <Route path="/" exact component={HomePage} />
        <Route path="/edit/:id" component={EditTournament} />
        <Route path="/create" component={CreateTournament} />
        <Route path="/user" component={CreateUser} />
        <Route path="/participant" component={Participant} />
        <Route path="/tournaments" exact component={Tournaments} />
        <Route path="/match" component={Match} />
     </div>
   </Router>
  );
}

export default App;
