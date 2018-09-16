import React, { Component } from 'react';

const b = require('b_').B({modSeparator: '--'}).with('description');

export default class Description extends Component {
  render() {
    return (
      <div className={b()}>
        <div className={b('container')}>
          <p>Услуга "X" самая иксовая услуга. Заряди свой телефон иксами!</p>
        </div>
      </div>
    )
  }
};

