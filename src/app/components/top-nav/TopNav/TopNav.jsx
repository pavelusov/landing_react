import React, { Component } from 'react';
import SiteNav from "../SiteNav";
import RegionChoice from "../RegionChoice";

const b = require('b_').B({modSeparator: '--'}).with('top-nav');

export default class TopNav extends Component {
  render() {
    return (
      <div className={b()}>
        <div className={b('container')}>
          <SiteNav/>
          <RegionChoice/>
        </div>
      </div>
    )
  }
};