import React from 'react'
import PropTypes from 'prop-types'

const ContestantTop = ({
    contestant: {
      name,
      nickname,
      height,
      picture,
      color
    }
  }) => {
    return (
        <div className='profile-top bg-primary p-2'>
            <img className='round-img my-1' src={picture} alt='' />
            <h1 className='large'>{name}</h1>
            <p className='lead'>
                {nickname && <span> AKA {nickname}</span>}
            </p>
            <p>Height {height && <span>{height}</span>}</p>
        </div>
    );
};

ContestantTop.propTypes = {
    contestant: PropTypes.object.isRequired
}

export default ContestantTop;
