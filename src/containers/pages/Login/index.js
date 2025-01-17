import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionUserName } from '../../../config/redux/action';

export class Login extends Component {
    changeUser = () => {
        this.props.changeUserName()
    }

    render() {
        return (
            <div>
                <p>Login Page {this.props.userName}</p>
                <button onClick={this.changeUser}>Go to Register</button>
                <button>Go to Dashboard</button>
            </div>
        )
    }
}

const reduxState = (state) => ({
    popupProps: state.popup,
    userName: state.user
})

const reduxDispatch = (dispatch) => ({
    changeUserName: () => dispatch(actionUserName())
})

export default connect(reduxState, reduxDispatch)(Login);
