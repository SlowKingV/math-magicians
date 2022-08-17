import { Component } from 'react';
import PropTypes from 'prop-types';

class CalcKey extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { keyClass, label, colored } = this.props;
    const colorClass = colored ? ' colored' : '';
    return <button className={`key ${keyClass}${colorClass}`} type="button">{label}</button>;
  }
}

CalcKey.propTypes = {
  keyClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  colored: PropTypes.bool,
};
CalcKey.defaultProps = { colored: false };

export default CalcKey;
