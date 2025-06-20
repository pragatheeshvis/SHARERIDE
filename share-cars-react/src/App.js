import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login.js';
import BookRide from './BookRide.js';
import RideDetails from './RideDetails.js';
import OfferRide from './OfferRide.js';
import Logout from './Logout.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, name: '' };
    this.getLoginName = this.getLoginName.bind(this);
  }

  getLoginName(name) {
    if (name) {
      this.setState({ isLoggedIn: true, name: name });
    }
  }
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <Link className="navbar-brand" to="/bookRide">
                  Share Cars
                </Link>
              </div>
              <div
                className="collapse navbar-collapse"
                id="bs-navbar-collapse-1"
              >
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/rideDetails">Ride Details</Link>
                  </li>
                  <li>
                    <Link to="/offerRide">Offer Ride</Link>
                  </li>
                </ul>
                {this.state.isLoggedIn ? (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a>Welcome {this.state.name}</a>
                    </li>
                    <li>
                      <Link to="/logout">Logout</Link>
                    </li>
                  </ul>
                ) : (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/">Login</Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </nav>
          <Route
            exact
            path="/"
            component={props => (
              <Login history={props.history} sendData={this.getLoginName} />
            )}
          />
          <Route path="/bookRide" component={BookRide} />
          <Route path="/rideDetails" component={RideDetails} />
          <Route path="/offerRide" component={OfferRide} />
          <Route path="/logout" component={Logout} />
        </div>
      </Router>
    );
  }
}

export default App;
