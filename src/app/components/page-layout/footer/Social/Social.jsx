import React, { Component } from 'react';

export default class Social extends Component {
  render() {
    return (
      <div className="social">
        <div className="social__list">
          <div className="social__item social__item--fb">
            fb
          </div>
          <div className="social__item social__item--vk">
            vk
          </div>
          <div className="social__item social__item--ok">
            ok
          </div>
        </div>
      </div>
    )
  }
};
