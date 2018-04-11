import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Login from './Login';

// login container always a stateful component
class LoginContainer extends Component {

    static propTypes = {
    };

    login = () => {
        console.log('You clicked the login button.');
    }

    render() {
        return (
            <Login login={this.login} />
        );
    }
}

export default LoginContainer;
