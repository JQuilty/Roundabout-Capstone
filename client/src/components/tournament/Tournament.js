import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import TournamentForm from './TournamentForm';
import { getTournament } from '../../actions/tournament';
import Spinner from '../layout/Spinner';

const Tournament = ({ getTournament, tournament: { tournament, loading }, match }) => {
    useEffect(() => {
      getTournament(match.params.id);
    }, [getTournament]);

    const [formData, setFormData] = useState({
      parName: '',
    });

    const { parName } = formData;
  
  const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
      
  const onSubmit = e => {
      e.preventDefault();
      console.log(formData);
      tournament.participants.push(formData);
  };
  
    return loading || tournament === null ? (
      <Spinner />
    ) : (
      <Fragment>
        <h1 className="large text-primary">{tournament.name}</h1>
        <p className="lead">
          Hosted in {tournament.location}
        </p>
        <div className="tournaments">
          {"\n"}
          {"\n"}
          Bracket goes here
          {"\n"}
          {"\n"}
        </div>
        <h4>Sign Up For {tournament.name}</h4>
        <form className='form' onSubmit={e => onSubmit(e)}>
        <input
          type='text'
          placeholder='Your Name'
          name='parName'
          value={parName}
          onChange={e => onChange(e)}
        />
        <input type='submit' className='btn btn-primary my-1' />
        </form>
        <div>
          Participants List:
          {tournament.participants}
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
