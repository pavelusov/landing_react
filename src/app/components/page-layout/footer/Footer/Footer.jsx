import React, { Component } from 'react';
import ExtraNav from "../ExtraNav";
import Social from "../Social";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__container">
          <ExtraNav/>
          <Social/>
        </div>
      </div>
    )
  }
};
