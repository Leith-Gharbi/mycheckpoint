import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
const Formulaire = () => {
  return (
<div className="Container mx-auto" style={{width:"70%"}}>
    <form  className="form" role="form">
        
      <div className="form-group row">
        <label className="col-lg-3 col-form-label form-control-label">First name</label>
        <div className="col-lg-9">
          <input className="form-control" type="text" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-3 col-form-label form-control-label">Last name</label>
        <div className="col-lg-9">
          <input className="form-control" type="text" value=""/>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-3 col-form-label form-control-label">Email</label>
        <div className="col-lg-9">
          <input className="form-control" type="email" value="email@gmail.com"/>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-3 col-form-label form-control-label">Company</label>
        <div className="col-lg-9">
          <input className="form-control" type="text" value=""/>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-3 col-form-label form-control-label">Website</label>
        <div className="col-lg-9">
          <input className="form-control" type="url" value=""/>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-3 col-form-label form-control-label">Time Zone</label>
        <div className="col-lg-9">
          <select className="form-control" id="user_time_zone" size="0">
            <option value="Hawaii">
              (GMT-10:00) Hawaii
            </option>
            <option value="Alaska">
              (GMT-09:00) Alaska
            </option>
            <option value="Pacific Time (US &amp; Canada)">
              (GMT-08:00) Pacific Time (US &amp; Canada)
            </option>
            <option value="Arizona">
              (GMT-07:00) Arizona
            </option>
            <option value="Mountain Time (US &amp; Canada)">
              (GMT-07:00) Mountain Time (US &amp; Canada)
            </option>
            <option selected="selected" value="Central Time (US &amp; Canada)">
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
        <label className="col-lg-3 col-form-label form-control-label">Username</label>
        <div className="col-lg-9">
          <input className="form-control" type="text" value=""/>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-3 col-form-label form-control-label">Password</label>
        <div className="col-lg-9">
          <input className="form-control" type="password" value=""/> 
                                    <small className="form-text text-muted" id="passwordHelpBlock">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</small>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-3 col-form-label form-control-label">Confirm</label>
        <div className="col-lg-9">
          <input className="form-control" type="password" value=""/>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-3 col-form-label form-control-label"></label>
        <div className="col-lg-9">
          <input className="btn btn-secondary" type="reset" value="Cancel"/> 
                                <input className="btn btn-primary" type="button" value="Save Changes"/>
        </div>
      </div>
    </form>
    </div>
  );
};

export default Formulaire;
