import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Profile from './components/profile/Profile';
import CreateProfile from './components/profile/CreateProfile';
import EditProfile from './components/profile/EditProfile';
import Tournaments from './components/tournaments/Tournaments';
import Tournament from './components/tournament/Tournament';
import Contestant from './components/contestant/Contestant';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateTournament from './components/tournament-forms/CreateTournament';
import Management from './components/management/management';
import Spectator from './components/spectator/spectator';
import Display from './components/display/display';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => { 
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return( 
    <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component = {Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path='/register' component = {Register} />
            <Route exact path='/login' component = {Login} />
            <Route exact path='/tournaments' component = {Tournaments} />
            <Route exact path='/tournaments/:id' component = {Tournament} />
            <Route exact path='/contestants/:id' component = {Contestant} />
            <PrivateRoute exact path='/profile' component = {Profile} />
            <PrivateRoute exact path='/create-tournament' component = {CreateTournament} />
            <PrivateRoute exact path='/create-profile' component = {CreateProfile} />
            <PrivateRoute exact path='/edit-profile' component = {EditProfile} />  
            <PrivateRoute exact path='/display' component = {Display} />  
            {/* <Route exact path='/profiles' component = {Profiles} />
            <Route exact path='/profile/:id' component = {Profile} />
            <PrivateRoute exact path='/dashboard' component = {Dashboard} /> 
            <PrivateRoute exact path='/add-experience' component = {AddExperience} />  
            <PrivateRoute exact path='/add-education' component = {AddEducation} />
            <PrivateRoute exact path='/posts' component = {Posts} />
            <PrivateRoute exact path='/posts/:id' component = {Post} />   */}
          </Switch>
        </section>
      </Fragment>
    </Router>
    </Provider>
)};

export default App;
