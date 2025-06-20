import React from 'react';

class OfferRide extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', from: '', to: '', car: '', seatsAvailable: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    alert('Ride offer successfully added!');
    this.props.history.push('/rideDetails');
  }
  render() {
    return (
      <div
        className="panel panel-primary"
        style={{ marginTop: '5%', width: '40%' }}
      >
        <div className="panel-heading">
          <h2 className="panel-title" style={{ textAlign: 'left' }}>
            Share Car Ride Registration Form
          </h2>
        </div>
        <div className="panel-body">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="from">From</label>
              <input
                type="text"
                name="from"
                className="form-control"
                value={this.state.from}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="to">To</label>
              <input
                type="text"
                name="to"
                className="form-control"
                value={this.state.to}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="car">Car</label>
              <input
                type="text"
                name="car"
                className="form-control"
                value={this.state.car}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="seatsAvailable">Seats Available</label>
              <input
                type="number"
                name="seatsAvailable"
                className="form-control"
                value={this.state.seatsAvailable}
                onChange={this.handleChange}
                min="1"
                max="7"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-md col-sm-3"
              style={{ display: 'inline' }}
            >
              Offer Ride!
            </button>
            &nbsp;&nbsp;&nbsp;
            <button
              type="reset"
              className="btn btn-default"
              style={{ display: 'inline' }}
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default OfferRide;
