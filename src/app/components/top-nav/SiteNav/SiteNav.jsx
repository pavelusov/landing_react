import React, { Component } from 'react';

export default class SiteNav extends Component {
  render() {
    return (
      <div className="site-nav site-nav--open*">
        <div className="site-nav__toggle">Все сайты</div>
        <div className="site-nav__list">
          <div className="site-nav__item site-nav__item--selected">Частным клиентам</div>
          <div className="site-nav__item">Корпоративным клиентам</div>
          <div className="site-nav__item">Инвесторам и прессе</div>
          <div className="site-nav__item">Интернет магазин</div>
        </div>
      </div>
    );
  }
}
