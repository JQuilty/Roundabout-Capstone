import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const MatchTile = ({
    auth,
    bout: { id, topContestant, bottomContestant },
}) => (
    <div className='post bg-white p-1 my-1'>
      <div>
        <p className='my-1'>{null}</p>
        <h5>{topContestant.name}</h5>
        <br></br>
        <hr>{bottomContestant.name}</hr>

      </div>
    </div>
  );

MatchTile.defaultProps = {
  showActions: true
};

MatchTile.propTypes = {
  bout: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  bout: state.bout,
  auth: state.auth
});

export default connect(
  mapStateToProps
)(MatchTile);