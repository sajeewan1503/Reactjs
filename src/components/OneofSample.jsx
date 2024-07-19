import PropTypes from "prop-types";

export const OneofSample = (props) => {
  const { color } = props;
  return (
    <div style={{ backgroundColor: color, padding: "20px", color: "white" }}>
      <p>This is my First Website {color}.</p>
    </div>
  );
};
OneofSample.protoTypes = {
  color: PropTypes.oneOf(["red", "green", "blue"]).isRequired,
};
