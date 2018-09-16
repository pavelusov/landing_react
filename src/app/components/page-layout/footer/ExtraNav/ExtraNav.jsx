import React, { Component } from 'react';

const b = require('b_').B({modSeparator: '--'}).with('extra-nav');

export default class ExtraNav extends Component {
  render() {
    return (
      <div className={b()}>
        <div className={b('list')}>
          <div className={b('item', {open: true})}>
            <div className={b('title')}>Компания</div>
            <div className={b('link')}>
              <a href="#">О компании</a>
            </div>
            <div className={b('link')}>
              <a href="#">Новости</a>
            </div>
            <div className={b('link')}>
              <a href="#">Условия оказания услуг</a>
            </div>
          </div>
          <div className={b('item', {open: false})}>
            <div className={b('title')}>Организациям</div>
            <div className={b('link')}>
              <a href="#">Инвесторам</a>
            </div>
            <div className={b('link')}>
              <a href="#">Прессе</a>
            </div>
            <div className={b('link')}>
              <a href="#">Партнерам</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
