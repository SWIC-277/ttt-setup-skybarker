import PropTypes from "prop-types";

export default function Square({ marker }) {
  return (
    <button className="square" type="button">
      {marker}
    </button>
  );
}

Square.propTypes = {
  marker: PropTypes.oneOf(["X", "O", ""]),
};

Square.defaultProps = {
  marker: "",
};
