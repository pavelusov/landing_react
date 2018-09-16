import React, { Component } from 'react';
import cn from 'classnames';
import { connect } from "react-redux";

const b = require('b_').B({modSeparator: '--'}).with('banner');

class Banner extends Component {
  render() {
    const {services} = this.props;
    const service = services.find(service => service.selected);
    return (
      <div className={b()}>
        <div className={b('container')}>
          <div className={b('content')}>
            <h1 className={b('title')}>{service.banner.title.top}
              {
                service.banner.title.bottom && (
                  <span className="text--purple">{service.banner.title.bottom}</span>
                )
              }
            </h1>
            <p className={b('description')}>{service.banner.description}</p>
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

const mapStateToProps = state => {
  return { services: state.services };
};

export default connect(mapStateToProps)(Banner);
