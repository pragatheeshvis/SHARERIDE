import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    alert('Form Submitted successfully!');
    this.props.sendData(this.state.username);
    this.props.history.push('/bookRide');
  }
  render() {
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h2 className="panel-title">Login</h2>
          </div>
          <div className="panel-body">
            <form
              className="form-horizontal"
              style={{ padding: '30px 5px 0px 5px' }}
              onSubmit={this.handleSubmit}
            >
              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="username">
                  Username
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={this.state.username}
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="password">
                  Password
                </label>
                <div className="col-md-9">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-offset-3 col-md-9">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" />
                      Remember Me
                    </label>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary col-md-offset-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
