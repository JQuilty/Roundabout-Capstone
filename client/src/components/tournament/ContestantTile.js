import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteContestant } from '../../actions/contestant';

const ContestantTile = ({
    deleteContestant,
    auth,
    contestant: { id, name },
    showActions
}) => (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/contestants/${id}`}>
          <img className='round-img' src={null} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{null}</p>
        
        {showActions && (
          <Fragment>
            {/* {!auth.loading && user === auth.user._id && ( */}
            {auth.isAuthenticated && !auth.loading && (
              <button
                onClick={() => deleteContestant(id)}
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

ContestantTile.defaultProps = {
  showActions: true
};

ContestantTile.propTypes = {
  contestant: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteContestant: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteContestant }
)(ContestantTile);