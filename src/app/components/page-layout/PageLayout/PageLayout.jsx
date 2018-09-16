import React, { Component } from 'react';

import Banner from '../content/Banner';
import Tabs from "../content/Tabs";
import Description from "../content/Description";
import Content from "../content/Content";
import Footer from "../footer/Footer/";
import Menu from "../menu/Menu";

const b = require('b_').B({modSeparator: '--'}).with('page-layout');

export default class PageLayout extends Component {
  render() {
    return (
      <div className={b()}>
        <div className={b('container')}>
          <header className={b('header')}>
            <Menu/>
          </header>
          <main className={b('content')}>
            <Content>
              <Banner/>
              <Tabs/>
              <Description/>
            </Content>
          </main>
          <footer className={b('footer')}>
            <Footer/>
          </footer>
        </div>
      </div>
    )
  }
};
