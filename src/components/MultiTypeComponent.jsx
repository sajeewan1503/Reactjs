import PropTypes from "prop-types";

export const MultiTypeComponent = (props) => {
  return (
    <div>
      <p>The value is: {props.value}</p>
    </div>
  );
};
MultiTypeComponent.prototype = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};
