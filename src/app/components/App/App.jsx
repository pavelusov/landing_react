import React, {Component} from 'react';

import TopNav from '../top-nav/TopNav'

export default class App extends Component {
  render() {
    console.log('App render')
    return (
      <React.Fragment>
        <TopNav/>
      </React.Fragment>
    )
  }
}
