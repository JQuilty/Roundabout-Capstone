import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import TournamentForm from './TournamentForm';
import { getTournament, addContestant, buildBracket } from '../../actions/tournament';
import Spinner from '../layout/Spinner';
import * as JSOG from 'jsog';
import * as _ from 'underscore';
import ContestantTile from './ContestantTile';
import MatchTile from './MatchTile';


const Tournament = ({ getTournament, tournament: { tournament, loading }, match }) => {
    useEffect(() => {
      getTournament(match.params.id);
    }, [getTournament]);

    const [formData, setFormData] = useState({
      parName: '',
      nickname: '',
      height: '',
      picture: '',
      color: '',
      id: match.params.id
    });

    const { parName, nickname, height, picture, color } = formData;
  
    const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
      
    const onSubmit = e => {
      e.preventDefault();
      console.log("Bracket Building");
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
        
        <button
          onClick={() => console.log("button click"), buildBracket(match.params.id), console.log(tournament.matches)}>
          Build Bracket
          <i className='fas fa-times' />
        </button>
        <h4>Sign Up For {tournament.name}</h4>
        <form className='form'>
        <input
          type='text'
          placeholder='Your Name'
          name='parName'
          value={parName}
          onChange={e => onChange(e)}
        />
        <input
          type='text'
          placeholder='Nickname or Titles'
          name='nickname'
          value={nickname}
          onChange={e => onChange(e)}
        />
        <input
          type='number'
          placeholder='Height (in)'
          name='height'
          value={height}
          onChange={e => onChange(e)}
        />
        <input
          type='text'
          placeholder='Picture placeholder'
          name='picture'
          value={picture}
          onChange={e => onChange(e)}
        />
        <input
          type='text'
          placeholder='Team Color'
          name='color'
          value={color}
          onChange={e => onChange(e)}
        />
        <button
                onClick={() => console.log("button click"), addContestant(formData)}
                type='button'
                className='btn btn-simple'
              >Add to Tournament
                <i className='fas fa-times' />
              </button>
        </form>
        <div id="participants">
          {tournament.participants.map((contestant) => (
          < ContestantTile key={contestant._id} contestant={contestant} />
          ))}
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
