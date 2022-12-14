import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
        <h1 className='headerfont'>LEADERBOARD SCORE WEBSITE</h1>
      <div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};