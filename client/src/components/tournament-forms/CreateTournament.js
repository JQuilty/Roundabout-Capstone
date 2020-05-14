import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addTournament } from '../../actions/tournament';


const CreateTournament = ({ addTournament, history }) => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        location: '',
      });

    const { name, date, location } = formData;
    
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
        
    const onSubmit = e => {
        e.preventDefault();
        addTournament(formData, history);
    };

    return (
        <Fragment>
            <h1 className="large text-primary">Create New Tournament</h1>
            <p className="lead">
            <i className="fas fa-user" /> Enter tournament information below
            </p>
            <small>* = required field</small>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <h4>Tournament Name</h4>
                    <input
                        type='text'
                        placeholder='* My Awesome Tournament'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <h4>Date</h4>
                    <input
                        type='date'
                        name='date'
                        value={date}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <h4>Location</h4>
                    <input
                        type='text'
                        placeholder='My Awesome City, State'
                        name='location'
                        value={location}
                        onChange={e => onChange(e)}
                    />
                </div>
                <input type='submit' className='btn btn-primary my-1' />
				<Link className='btn btn-light my-1' to='/tournaments'>
					Go Back
				</Link>
            </form>
        </Fragment>
    );
};

CreateTournament.propTypes = {
    addTournament: PropTypes.func.isRequired
}

export default connect(null, { addTournament })(withRouter(CreateTournament));
