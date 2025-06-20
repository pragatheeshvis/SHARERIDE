import React from 'react';
import './BookRide.css';

class BookRide extends React.Component {
  constructor(props) {
    super(props);
    this.showAllRides = this.showAllRides.bind(this);
    this.offerARide = this.offerARide.bind(this);
  }
  showAllRides() {
    this.props.history.push('/rideDetails');
  }
  offerARide() {
    this.props.history.push('/offerRide');
  }
  render() {
    return (
      <div className="panel panel-primary" style={{ width: '40%' }}>
        <div className="panel-heading">
          <h2 className="panel-title">Book a Ride</h2>
        </div>
        <div className="panel-body">
          <p>
            Share Cars lets you save your travel cost by allowing you to share
            your ride with other Share Cars users travelling along your route.
            To book an Share Cars all you would need to do is login to you Share
            Cars account and choose Book a ride.
          </p>
          <br />
          <div className="row">
            <button
              type="button"
              className="btn btn-primary btn-br"
              onClick={this.showAllRides}
            >
              Show All Rides
            </button>
            <br />
            <br />
            <button
              type="button"
              className="btn btn-primary btn-br"
              onClick={this.offerARide}
            >
              Offer A Ride!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BookRide;
