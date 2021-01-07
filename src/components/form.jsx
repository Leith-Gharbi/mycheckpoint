import React, { Component } from 'react';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'leith',
      lastName: 'gharbi',
      email: 'leitgharbi@yahoo.fr',
      company: 'emaa',
      webSite: 'www.facebook.com',
      userName: 'hello',
      password: '',
      timeZone:'GMT-06:00',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    alert('Votre parfum favori est : ' + this.state.firstName);
    event.preventDefault();
  }
  render() {
    return (
      <div className="Container mx-auto" style={{ width: '70%' }}>
        <form className="form" role="form" onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              First name
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="text"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Last name
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="text"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Email
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Company
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="text"
                value={this.state.company}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Website
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="url"
                value={this.state.webSite}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Time Zone
            </label>
            <div className="col-lg-9">
              <select
                className="form-control"
                id="user_time_zone"
                size="0"
                value={this.state.timeZone}
                onChange={this.handleInputChange}
              >
                <option value="Hawaii">(GMT-10:00) Hawaii</option>
                <option value="Alaska">(GMT-09:00) Alaska</option>
                <option value="Pacific Time (US &amp; Canada)">
                  (GMT-08:00) Pacific Time (US &amp; Canada)
                </option>
                <option value="Arizona">(GMT-07:00) Arizona</option>
                <option value="Mountain Time (US &amp; Canada)">
                  (GMT-07:00) Mountain Time (US &amp; Canada)
                </option>
                <option
                  value="Central Time (US &amp; Canada)"
                >
                  (GMT-06:00) Central Time (US &amp; Canada)
                </option>
                <option value="Eastern Time (US &amp; Canada)">
                  (GMT-05:00) Eastern Time (US &amp; Canada)
                </option>
                <option value="Indiana (East)">
                  (GMT-05:00) Indiana (East)
                </option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Username
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="text"
                value={this.state.userName}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Password
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              <small className="form-text text-muted" id="passwordHelpBlock">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </small>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Confirm
            </label>
            <div className="col-lg-9">
              <input className="form-control" type="password" value="" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label"></label>
            <div className="col-lg-9">
              {/* <input
                className="btn btn-secondary"
                type="reset"
                value="Cancel"
              /> */}
                      <input type="submit" value="Submit" />

            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
