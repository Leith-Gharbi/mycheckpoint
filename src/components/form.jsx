import React, { Component } from 'react';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      webSite: '',
      userName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  handleCancel= (event) => {
    this.setState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        webSite: '',
      });
  };

handleSubmit(event) {
    alert('HELLO  ' + this.state.firstName +' '+ this.state.lastName +'\n'+"your email is :"+ this.state.email +'\n'+" you work in : " +this.state.company +'\n' +"your website is :"+ this.state.webSite);
    event.preventDefault();
  }
  render() {
    return (
      <div className="Container mx-auto" style={{ width: '70%' }}>
          <h2 style={{textAlign:"center", margin :"20px"}}>GOMYC<span style={{ color:"red" }}>O</span>DE</h2>
        <h2 style={{textAlign:"center", margin :"20px" ,color:"blueviolet"}}>REACT JS Checkpoint</h2>
        <form className="form" >
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              First name
            </label>
            <div className="col-lg-9">
              <input
                id="firstName"
                className="form-control"
                type="text"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Last name
            </label>
            <div className="col-lg-9">
              <input
                id="lastName"
                className="form-control"
                type="text"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Email
            </label>
            <div className="col-lg-9">
              <input
                id="email"
                className="form-control"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Company
            </label>
            <div className="col-lg-9">
              <input
                id="company"
                className="form-control"
                type="text"
                value={this.state.company}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Website
            </label>
            <div className="col-lg-9">
              <input
                id="webSite"
                className="form-control"
                type="url"
                value={this.state.webSite}
                onChange={this.handleChange}
              />
            </div>
          </div>


          <div className="row" style={{ justifyContent:"center"}}>
            <button id="btn" style={{ marginRight:"10px"}} className="btn btn-success" onClick={(e) => this.handleSubmit(e)}>Envoyer</button>
            <button id="cancel" className="btn btn-danger" onClick={(e) => this.handleCancel(e)}>Cancel</button>

            {/* <input type="submit" value="Envoyer" /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
