import React, { Component } from 'react';

const b = require('b_').B({modSeparator: '--'}).with('tabs');

export default class Tabs extends Component {
  render() {
    return (
      <div className={b()}>
        <div className={b('list')}>
          <div className={b('item', {selected: false})}><p>Телефон</p></div>
          <div className={b('item', {selected: false})}><p>Планшет</p></div>
          <div className={b('item', {selected: false})}><p>Телевизор</p></div>
          <div className={b('item', {selected: true})}><p>X</p></div>
          <div className={b('item', {selected: false})}><p>Z</p></div>
        </div>
      </div>
    )
  }
};
