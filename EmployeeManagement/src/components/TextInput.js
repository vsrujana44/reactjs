import React, { PropTypes } from 'react';

const TextInput = (props) =>{
  const handleChange = (e) =>{
    props.onChange(props.name, e.target.value);
  };

  return(
    <input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      id={props.name}
      className="form-control"
      onChange={handleChange}/>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
     PropTypes.string,
     PropTypes.number
  ])
};

export default TextInput;
