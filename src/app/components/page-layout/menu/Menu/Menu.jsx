import React, { Component } from 'react';

// TO-DO: сделать меню. Здесь обычная верстка.
export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-bar">
          <div className="menu-bar__logotype">логотип</div>
          <div className="menu-bar__search-panel">
            <div className="menu-bar__search-panel_input-wrapper">
              <input type="text" className="menu-bar__search-panel__input" placeholder="Поиск"/>
            </div>
          </div>
          <div className="menu-bar__button-area menu-bar__button-area--account">
            Личный кабинет
          </div>
          <div className="menu-bar__button-area menu-bar__button-area--switcher">
            свитчер
          </div>
        </div>
        <div className="menu-nav">
          <div className="menu-nav__list">
            <div className="menu-nav__item">
              <div className="menu-nav__title">Тарифы</div>
              <div className="menu-nav__links">
                <div className="menu-nav__link">
                  <a href="#">Тариф "Большой"</a>
                </div>
                <div className="menu-nav__link">
                  <a href="#">Тариф "Средний"</a>
                </div>
                <div className="menu-nav__link">
                  <a href="#">Тариф "Маленький"</a>
                </div>
              </div>
            </div>
            <div className="menu-nav__item">Интернет</div>
            <div className="menu-nav__item">Услуги</div>
            <div className="menu-nav__item">Роуминг</div>
            <div className="menu-nav__item">
              <div className="menu-nav__title">Акции</div>
              <div className="menu-nav__links">
                <div className="menu-nav__link">
                  <a href="#">Акция "Комплекс XYZ"</a>
                </div>
                <div className="menu-nav__link">
                  <a href="#">Акция "Средняя"</a>
                </div>
                <div className="menu-nav__link">
                  <a href="#">Акция "Маленькая"</a>
                </div>
              </div>
            </div>
            <div className="menu-nav__item">Оплата</div>
          </div>
        </div>
      </div>
    )
  }
};
