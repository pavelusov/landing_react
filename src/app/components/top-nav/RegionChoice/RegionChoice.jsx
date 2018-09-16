import React, { Component } from 'react';

const b = require('b_').B({modSeparator: '--'}).with('region-choice');

export default class RegionChoice extends Component {
  render() {
    return (
      <div className={b({open: false})}>
        <div className={b('toggle')}>Свердловская область</div>
        <div className={b('search-panel')}>
          <div className={b('search-panel__input-wrapper')}>
            <input className={b('search-panel__input')} type="text" placeholder="поиск по регионам"/>
          </div>
          <div className={b('region-list')}>
            <div className={b('region-item', {selected: false})}>Москва и область</div>
            <div className={b('region-item', {selected: false})}>Санкт-петербург и область</div>
            <div className={b('region-item', {selected: true})}>Свердловская область
            </div>
            <div className={b('region-item', {selected: false})}>Самарская область</div>
            <div className={b('region-item', {selected: false})}>Воронежская область</div>
            <div className={b('region-item', {selected: false})}>Челябинская область</div>
          </div>
        </div>
      </div>
    );
  }
}
