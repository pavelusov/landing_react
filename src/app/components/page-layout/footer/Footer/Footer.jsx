import React, { Component } from 'react';
import ExtraNav from "../ExtraNav";
import Social from "../Social";

const b = require('b_').B({modSeparator: '--'}).with('footer');

export default class Footer extends Component {
  render() {
    return (
      <div className={b()}>
        <div className={b('container')}>
          <ExtraNav/>
          <Social/>
        </div>
      </div>
    )
  }
};
