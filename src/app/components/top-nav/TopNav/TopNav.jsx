import React, { Component } from 'react';
import SiteNav from "../SiteNav";
import RegionChoice from "../RegionChoice";

export default class TopNav extends Component {
  render() {
    return (
      <div className="top-nav">
        <div className="top-nav__container">
          <SiteNav/>
          <RegionChoice/>
        </div>
      </div>
    )
  }
};