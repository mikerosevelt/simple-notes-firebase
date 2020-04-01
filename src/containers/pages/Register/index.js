import React, { Component } from 'react';
import './Register.scss';
import Button from '../../../components/atoms/Button';
import { registerUserAPI } from '../../../config/redux/action';
import { connect } from 'react-redux'


export class Register extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        // console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleRegisterSubmit = () => {
        const { email, password } = this.state;
        this.props.registerAPI({ email, password })
    }

    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" type="text" placeholder="Email" onChange={this.handleChangeText} />
                    <input className="input" id="password" type="password" placeholder="Password" onChange={this.handleChangeText} />
                    {/* <button className="btn" onClick={this.handleRegisterSubmit}>Register</button> */}
                    <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading} />
                    {/* <button>Go to Dashboard</button> */}
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register);
