import React, { Component } from 'react';

export default class Tabs extends Component {
  render() {
    return (
      <div className="tabs">
        <div className="tabs__list">
          <div className="tabs__item"><p>Телефон</p></div>
          <div className="tabs__item"><p>Планшет</p></div>
          <div className="tabs__item"><p>Телевизор</p></div>
          <div className="tabs__item tabs__item--selected"><p>X</p></div>
          <div className="tabs__item"><p>Z</p></div>
        </div>
      </div>
    )
  }
};
