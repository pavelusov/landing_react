import React, { Component } from 'react';

export default class MobileMenu extends Component {
  render() {
    return (
      <div className="mobile-menu">
        <div className="mobile-site-nav">
          <div className="mobile-site-nav__list">
            <div className="mobile-site-nav__item">
              <div className="mobile-site-nav__title">Тарифы</div>
              <div className="mobile-site-nav__links">
                <div className="mobile-site-nav__link">
                  <a href="#">Тариф "Большой"</a>
                </div>
                <div className="mobile-site-nav__link">
                  <a href="#">Тариф "Средней"</a>
                </div>
                <div className="mobile-site-nav__link">
                  <a href="#">Тариф "Маленький"</a>
                </div>
              </div>
            </div>
            <div className="mobile-site-nav__item">
              <div className="mobile-site-nav__title">Акции</div>
              <div className="mobile-site-nav__links">
                <div className="mobile-site-nav__link">
                  <a href="#">Акция "Комплекс XYZ"</a>
                </div>
                <div className="mobile-site-nav__link">
                  <a href="#">Акция "Средняя"</a>
                </div>
                <div className="mobile-site-nav__link">
                  <a href="#">Акция "Маленькая"</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
