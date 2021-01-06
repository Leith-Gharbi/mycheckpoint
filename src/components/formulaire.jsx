import React, { Component } from 'react';
const Formulaire = () => {
  return (
    <form action="#" method="post">
      <p>
        <label for="username">First Name</label>
        <input id="username" name="username" type="text" />
        <span>Can only contain letters a-z in lowercase</span>
      </p>
      <p>
        <label for="password">Last Name</label>
        <input id="password" name="password" type="text" />
        <span>Must contain a lowercase, uppercase letter and a number</span>
      </p>
      <p>
        <label for="telephone">Telephone</label>
        <input id="telephone" name="telephone" type="text" />
        <span>
          The telephone number must be in the format of (555) 555-5555
        </span>
      </p>
      <p>
        <label for="email">Email</label>
        <input id="email" name="email" type="text" />
        <span>Must be a valid email address</span>
      </p>
      <p>
        <input type="submit" class="btn btn-info contactBtn" value="Send" />
      </p>
    </form>
  );
};

export default Formulaire;
