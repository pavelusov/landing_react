import React, { Component } from 'react';
import cn from 'classnames';

const b = require('b_').B({modSeparator: '--'}).with('banner');

export default class Banner extends Component {
  render() {
    return (
      <div className={b()}>
        <div className={b('container')}>
          <div className={b('content')}>
            <h1 className={b('title')}>Услуга X <span className="text--purple">Заряди телефон</span></h1>
            <p className={b('description')}>Не нужно экономить на общении с друзьями</p>
          </div>
          <div className={b('image')}>
            <div className={cn(
              b('circle'),
              "bg--purple animation animation-zoom" )}></div>
            <div className={cn(
              b('circle'),
              "bg--purple animation animation-zoom animation--delay-200")}></div>
            <div className={cn(
              b('circle'),
              "bg--white animation animation-zoom animation--delay-400")}></div>
          </div>
        </div>
      </div>
    )
  }
};
