import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div>
      <h2>Footer</h2>
      <Route path='/' exact render={() => (
        <p>You are on <span>Home Page</span></p>
      )} />

      <Route path='/:page' exact render={(props) => {
        console.log(props);
        return (
          <p>You are on <span>{props.match.params.page}</span></p>
        )
      }} />
    </div>
  );
}

export default Footer;