import { Component } from 'react';
import PropTypes from 'prop-types';

class CalcKey extends Component {
  constructor(props) {
    super(props);
    this.handleKeyClick = this.handleKeyClick.bind(this);
    this.state = {};
  }

  handleKeyClick() {
    const { label, handleKeyClick } = this.props;
    handleKeyClick(label);
  }

  render() {
    const { keyClass, label, colored } = this.props;
    const colorClass = colored ? ' colored' : '';
    return <button className={`key ${keyClass}${colorClass}`} type="button" onClick={this.handleKeyClick}>{label}</button>;
  }
}

CalcKey.propTypes = {
  keyClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleKeyClick: PropTypes.func.isRequired,
  colored: PropTypes.bool,
};
CalcKey.defaultProps = { colored: false };

export default CalcKey;
