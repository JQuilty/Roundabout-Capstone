import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const CreateProfile = ({
	createProfile,
	getCurrentProfile,
	profile: { profile, loading },
	history
}) => {
    const [formData, setFormData] = useState({
        location: '',
        bio: ''
    });
    const {
		location,
		bio
    } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
        
    const onSubmit = e => {
		e.preventDefault();
		createProfile(formData, history);
    };

    useEffect(() => {
		getCurrentProfile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getCurrentProfile]);

    return loading && profile === null ? (
        <Redirect to='/profile' />
    ) : (
        <Fragment>
            <h1 className='large text-primary'>Create Your Profile</h1>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
					<input
						type='text'
						placeholder='Location'
						name='location'
						value={location}
						onChange={e => onChange(e)}
					/>
					<small className='form-text'>
						City & state suggested (eg. Boston, MA)
					</small>
				</div>
                <div className='form-group'>
					<textarea
						placeholder='A short bio of yourself'
						name='bio'
						value={bio}
						onChange={e => onChange(e)}
					/>
					<small className='form-text'>Tell us a little about yourself</small>
				</div>
                <input type='submit' className='btn btn-primary my-1' />
				<Link className='btn btn-light my-1' to='/profile'>
					Go Back
				</Link>
            </form>

        </Fragment>  
    );  
};

CreateProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	profile: state.profile
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
	withRouter(CreateProfile)
);
