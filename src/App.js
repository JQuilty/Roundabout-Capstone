import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateTournament from "./components/create-tournament.component";
import CreateUser from "./components/create-user.component";
import Participant from "./components/participant.component";
import Match from "./components/match.component";

function App() {
  return (
   <Router>
     <div className="container">
       <Navbar />
        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateTournament} />
        <Route path="/user" component={CreateUser} />
        <Route path="/participant" component={Participant} />
        <Route path="/match" component={Match} />
     </div>
   </Router>
  );
}

export default App;
