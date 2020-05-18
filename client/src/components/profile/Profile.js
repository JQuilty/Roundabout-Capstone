import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Profile = ({
    getCurrentProfile,
    auth,
    deleteAccount,
    profile: { profile, loading },
  }) => {
    useEffect(() => {
      getCurrentProfile();
    }, [getCurrentProfile]);

    return loading && profile === null ? (
      <Spinner />
    ) : (
      <Fragment>
        {profile !== null ? (
          <Fragment>
          <div className='profile-grid my-1'>
              <ProfileTop profile={profile} />
              <ProfileAbout profile={profile} />
          
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to='/edit-profile' className='btn btn-dark'>
                  Edit Profile
                </Link>
            )}

            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <button className='btn btn-danger' onClick={() => deleteAccount()}>
                    <i className='fas fa-user-minus' /> Delete My Account
                </button>
            )}
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to='/create-profile' className='btn btn-primary my-1'>
              Create Profile
            </Link>
          </Fragment>
        )}
      </Fragment>
    );
};

Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});
  
export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Profile);
