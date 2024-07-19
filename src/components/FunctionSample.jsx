import PropTypes from "prop-types";

export const FunctionSample = (props) => {
  const { handleClick } = props;
  return (
    <div>
      <p>This is my First Web Page.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
FunctionSample.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
