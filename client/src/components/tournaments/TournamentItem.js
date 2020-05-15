import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteTournament } from '../../actions/tournament';

const TournamentItem = ({
    deleteTournament,
    auth,
    tournament: { _id, name, user, date },
    showActions
}) => (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/tournnaments/${user}`}>
          <img className='round-img' src={null} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{null}</p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        
        {showActions && (
          <Fragment>
            {/* {!auth.loading && user === auth.user._id && ( */}
            {auth.isAuthenticated && !auth.loading && user === auth.user._id && (
              <button
                onClick={() => deleteTournament(_id)}
                type='button'
                className='btn btn-danger'
              >
                <i className='fas fa-times' />
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );

TournamentItem.defaultProps = {
  showActions: true
};

TournamentItem.propTypes = {
  tournament: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteTournament: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteTournament }
)(TournamentItem);