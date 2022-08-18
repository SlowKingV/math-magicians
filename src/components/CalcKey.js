import PropTypes from 'prop-types';

const CalcKey = ({
  keyClass, label, handleKeyClick, colored,
}) => {
  const clickHandler = () => { handleKeyClick(label); };
  const colorClass = colored ? ' colored' : '';

  return <button className={`key ${keyClass}${colorClass}`} type="button" onClick={clickHandler}>{label}</button>;
};

CalcKey.propTypes = {
  keyClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleKeyClick: PropTypes.func.isRequired,
  colored: PropTypes.bool,
};
CalcKey.defaultProps = { colored: false };

export default CalcKey;
