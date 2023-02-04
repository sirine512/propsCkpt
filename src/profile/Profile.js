import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const { fullName, bio, profession, handleName } = props;

  return (
    <div style={{ backgroundColor: 'rgb(1,1,1,0.5)', padding: '20px',borderRadius:'10px' }}>
      {props.children}
      <h2 style={{color:'#f0b44d'}}>{fullName}</h2>
      <p>{bio}</p>
      <h4>{profession}</h4>
      <button onClick={() => handleName(fullName)} style={{ backgroundColor: '#5586e0',borderRadius:'10px', padding: '15px',border:'none',color:'white' }}>Click me</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'Jane Doe',
  bio: 'Lorem ipsum dolor sit amet',
  profession: 'Developer',
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default Profile;