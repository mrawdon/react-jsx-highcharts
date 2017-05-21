import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Series from '../Series';

class CandlestickSeries extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  render () {
    return (
      <Series {...this.props} type="candlestick" />
    );
  }
}

export default CandlestickSeries;
