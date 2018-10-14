import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect, withRouter} from 'react-router-dom';

import SignupForm from './signupForm';

import './signupPage.css';

export function SignupPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/profile/home" />;
    }
    return (
        <div className="home">
            <h2>Signup for Movie Helix</h2>
            <SignupForm />
            <Link to="/login">Login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(SignupPage));