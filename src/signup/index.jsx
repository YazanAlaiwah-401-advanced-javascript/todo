/* eslint-disable comma-dangle */
import React from 'react';
import { SettingsContext } from '../context/data.js';
import Show from '../show/index.js';

class Signup extends React.Component {
  // using contextType will add the context to the "this.context"
  static contextType = SettingsContext;
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', email: '', role: '' };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.context.signup(
      this.state.username,
      this.state.email,
      this.state.password,
      this.state.role
    );
  };
  render() {
    return (
      <>
        <Show condition={this.context.loggedIn}>
          <button onClick={this.context.logout}> Log Out</button>
        </Show>
        <Show condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="password"
              placeholder="Enter Password"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="role"
              placeholder="Enter role"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
            <button>Login</button>
          </form>
        </Show>
      </>
    );
  }
}

export default Signup;
