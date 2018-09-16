import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import { setService } from 'app_redux/common/service-company/service-company.actions';

const b = require('b_').B({modSeparator: '--'}).with('tabs');

class Tabs extends Component {
  setService = (id) => {
    const services = this.props.services.map(service => {
      (service.id === id)
        ? service.selected = true
        : service.selected = false;
      return service;
    });
    this.props.actions.setService(services);
  };

  render() {
    const {services} = this.props;
    return (
      <div className={b()}>
        <div className={b('list')}>
          {
            services.map((service) => {
              return (
                <div
                  key={service.id}
                  className={b('item', {selected: service.selected})}
                  onClick={() => this.setService(service.id)}
                ><p>{service.name}</p></div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { services: state.services };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      setService: bindActionCreators(setService, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
