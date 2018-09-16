import React, { Component } from 'react';
import { connect } from "react-redux";

const b = require('b_').B({modSeparator: '--'}).with('description');

class Description extends Component {
  render() {
    const {services} = this.props;
    const service = services.find(service => service.selected);
    return (
      <div className={b()}>
        <div className={b('container')}>
          <p>{service.description}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { services: state.services };
};

export default connect(mapStateToProps)(Description);
