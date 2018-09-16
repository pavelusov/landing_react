import React, {Component} from 'react';

import TopNav from '../top-nav/TopNav'
import PageLayout from '../page-layout/PageLayout';
import MobileMenu from "../MobileMenu";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNav/>
        <PageLayout/>
        <MobileMenu/>
      </React.Fragment>
    )
  }
}
