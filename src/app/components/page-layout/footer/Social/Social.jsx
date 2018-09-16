import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const b = require('b_').B({modSeparator: '--'}).with('social');

export default class Social extends Component {
  render() {
    return (
      <div className={b()}>
        <div className={b('list')}>
          <div className={b('item', {fb: true})}>
            <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
          </div>
          <div className={b('item', {vk: true})}>
            <FontAwesomeIcon icon={['fab', 'vk']}/>
          </div>
          <div className={b('item', {ok: true})}>
            <FontAwesomeIcon icon={['fab', 'odnoklassniki']}/>
          </div>
        </div>
      </div>
    )
  }
};
