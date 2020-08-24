import PropTypes from "prop-types";
import React from "react";

export const Input = ({ inputHandler, name, placeholder, type }) => {


  const handleChange = (event) => {
    inputHandler(event)
  }

  return <>
    <label className="sr-only" htmlFor={name}>{name}</label>
    <input
      className="input mb-4 is-success"
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange} />
  </>;
}

Input.defaultProps = {
  placeholder: "",
  type: 'text'
}

Input.propTypes = {
  inputHandler: PropTypes.func,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};
