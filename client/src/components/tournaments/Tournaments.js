import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import TournamentItem from './TournamentItem';
// import TournamentForm from './TournamentForm';
import { getTournaments } from '../../actions/tournament';

const Tournaments = ({ getTournaments, tournament: { tournaments } }) => {
  useEffect(() => {
    getTournaments();
  }, [getTournaments]);

  return (
    <Fragment>
      <h1 className="large text-primary">Tournaments</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome to the community
      </p>
      {/* <TournamentForm />
      <div className="tournaments">
        {tournaments.map((tournament) => (
          <TournamentItem key={tournament._id} tournament={tournament} />
        ))}
      </div> */}
    </Fragment>
  );
};

Tournaments.propTypes = {
  getTournaments: PropTypes.func.isRequired,
  tournament: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  tournament: state.tournament
});

export default connect(mapStateToProps, { getTournaments })(Tournaments);