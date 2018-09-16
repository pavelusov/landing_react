import React, { Component } from 'react';

export default class RegionChoice extends Component {
  render() {
    return (
      <div className="region-choice region-choice--open*">
        <div className="region-choice__toggle">Свердловская область</div>
        <div className="region-choice__search-panel">
          <div className="region-choice__search-panel__input-wrapper">
            <input className="region-choice__search-panel__input" type="text" placeholder="поиск по регионам"/>
          </div>
          <div className="region-choice__region-list">
            <div className="region-choice__region-item">Москва и область</div>
            <div className="region-choice__region-item">Санкт-петербург и область</div>
            <div className="region-choice__region-item region-choice__region-item--selected">Свердловская область
            </div>
            <div className="region-choice__region-item">Самарская область</div>
            <div className="region-choice__region-item">Воронежская область</div>
            <div className="region-choice__region-item">Челябинская область</div>
          </div>
        </div>
      </div>
    );
  }
}
