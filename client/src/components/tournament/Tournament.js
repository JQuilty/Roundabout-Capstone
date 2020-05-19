import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import TournamentForm from './TournamentForm';
import { getTournament } from '../../actions/tournament';

const Tournament = ({ getTournament, tournament: { tournament } }) => {
  useEffect(() => {
    getTournament(tournament);
  }, [getTournament]);

  return (
    <Fragment>
      <h1 className="large text-primary">Tournaments</h1>
      <p className="lead">
        <i className="fas fa-user" /> View tournaments in progress
      </p>
      <div className="tournaments">
        {tournament}
      </div>
    </Fragment>
  );
};

Tournament.propTypes = {
  getTournament: PropTypes.func.isRequired,
  tournament: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  tournament: state.tournament
});

export default connect(mapStateToProps, { getTournament })(Tournament);