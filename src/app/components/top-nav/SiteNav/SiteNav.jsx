import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const b = require('b_').B({modSeparator: '--'}).with('site-nav');

export default class SiteNav extends Component {
  render() {
    return (
      <div className={b({open: false})}>
        <div className={b('toggle')}>Все сайты</div>
        <div className={b('list')}>
          <div className={b('item', {selected: true})}>Частным клиентам</div>
          <div className={b('item', {selected: false})}>Корпоративным клиентам</div>
          <div className={b('item', {selected: false})}>Инвесторам и прессе</div>
          <div className={b('item', {selected: false})}>
            Интернет магазин
            <FontAwesomeIcon className={b('icon')} icon={['fas', 'shopping-cart']}/>
          </div>
        </div>
      </div>
    );
  }
}
