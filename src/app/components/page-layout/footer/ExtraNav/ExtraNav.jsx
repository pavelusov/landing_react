import React, { Component } from 'react';

export default class ExtraNav extends Component {
  render() {
    return (
      <div className="extra-nav">
        <div className="extra-nav__list">
          <div className="extra-nav__item extra-nav__item--open">
            <div className="extra-nav__title">Компания</div>
            <div className="extra-nav__link">
              <a href="#">О компании</a>
            </div>
            <div className="extra-nav__link">
              <a href="#">Новости</a>
            </div>
            <div className="extra-nav__link">
              <a href="#">Условия оказания услуг</a>
            </div>
          </div>
          <div className="extra-nav__item">
            <div className="extra-nav__title">Организациям</div>
            <div className="extra-nav__link">
              <a href="#">Инвесторам</a>
            </div>
            <div className="extra-nav__link">
              <a href="#">Прессе</a>
            </div>
            <div className="extra-nav__link">
              <a href="#">Партнерам</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
