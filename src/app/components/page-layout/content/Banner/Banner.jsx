import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner__container">
          <div className="banner__content">
            <h1 className="banner__title">Услуга X <span className="text--purple">Заряди телефон</span></h1>
            <p className="banner__description">Не нужно экономить на общении с друзьями</p>
          </div>
          <div className="banner__image">
            <div className="banner__circle bg--purple animation animation-zoom"></div>
            <div className="banner__circle bg--purple animation animation-zoom animation--delay-200"></div>
            <div className="banner__circle bg--white animation animation-zoom animation--delay-400"></div>
          </div>
        </div>
      </div>
    )
  }
};
