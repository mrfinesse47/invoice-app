import React from 'react';

const Input = ({ onChange, value, name, type, label }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className='form-control'
        id={name}
        name={name}
        autoComplete={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
