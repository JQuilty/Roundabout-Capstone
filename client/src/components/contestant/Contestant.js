import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContestant } from '../../actions/contestant';
import Spinner from '../layout/Spinner';
import ContestantTop from './ContestantTop';

const Contestant = ({ getContestant, contestant: { contestant, loading }, match }) => {
    useEffect(() => {
      getContestant(match.params.id);
    }, [getContestant]);
  
    return loading || contestant === null ? (
      <Spinner />
    ) : (
      <Fragment>
          <div className='profile-grid my-1'>
              <ContestantTop contestant={contestant} />
          </div>
      </Fragment>
    );
  };

  Contestant.propTypes = {
    getContestant: PropTypes.func.isRequired,
    contestant: PropTypes.object.isRequired
  };

  const mapStateToProps = (state) => ({
    contestant: state.contestant
  });

  export default connect(mapStateToProps, { getContestant })(Contestant); 
