import React, { Component } from 'react';

import Banner from '../content/Banner';
import Tabs from "../content/Tabs";
import Description from "../content/Description";
import Content from "../content/Content";
import Footer from "../footer/Footer/";
import Menu from "../menu/Menu";

export default class PageLayout extends Component {
  render() {
    return (
      <div className="page-layout">
        <div className="page-layout__container">
          <header className="page-layout__header">
            <Menu/>
          </header>
          <main className="page-layout__content">
            <Content>
              <Banner/>
              <Tabs/>
              <Description/>
            </Content>
          </main>
          <footer className="page-layout__footer">
            <Footer/>
          </footer>
        </div>
      </div>
    )
  }
};
