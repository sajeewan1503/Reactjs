import PropTypes from "prop-types";

export const Student = (props) => {
  return (
    <div className="student">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>{props.name}</th>
          </tr>
          <tr>
            <th>Age</th>
            <th>{props.age}</th>
          </tr>
          <tr>
            <th>isMadrid</th>
            <th>{props.isMarried ? "Yes" : "No"}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Student.protoTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
};
Student.defaultProps = {
  name: "No Name",
  age: 0,
  isMarried: false,
};
