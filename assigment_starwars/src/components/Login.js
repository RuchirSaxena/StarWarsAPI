import React, { Component } from 'react';
import config from '../config/config';
import axios from 'axios';
import ReactDOM from 'react-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.checkCreadentials = this.checkCreadentials.bind(this);
    }
    state = {
        users: [],
        loginStatus: false,
        showStatus: false
    }

    // componentDidMount() {
    //     axios.get(config.baseUrl + 'people/')
    //         .then(users => {
    //             console.log(users.data.results);
    //             this.setState(() => {
    //                 return {
    //                     users: users.data.results
    //                 }
    //             });
    //         });
    // }

    checkCreadentials() {
        console.log(this.refs.username.value);
        const username = this.refs.username.value;
        const password = this.refs.password.value;

        axios.get(config.baseUrl + `people/?search=${username}`)
            .then(users => {
                console.log(users.data.results);
                // this.setState(() => {
                //     return {
                //         users: users.data.results
                //     }
                // });

                const user = users.data.results.filter((user) => {
                    return username === user.name && password === user.birth_year
                });
                if (user.length) {
                    this.setState(() => {
                        return {
                            loginStatus: true,
                            showStatus: true
                        }
                    });
                } else {
                    this.setState(() => {
                        return {
                            loginStatus: false,
                            showStatus: true
                        }
                    });
                }
            });
    }
    render() {
        return (
            <div className="login-wizard">
                <label htmlFor="">Username</label>
                <input type="text" ref="username" /><br />
                <label htmlFor="">Password</label>
                <input type="text" ref="password" /><br />
                <input type="button" onClick={this.checkCreadentials} value="Login" />
                {this.state.showStatus &&
                    <div>{this.state.loginStatus === false ? "Incorrect creadentials" : "Login successful"}</div>
                }
            </div>
        );
    }
}
export default Login;


