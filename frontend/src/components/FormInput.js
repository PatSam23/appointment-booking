// src/components/FormInput.js
import React from 'react';

const FormInput = ({ type, name, placeholder, onChange }) => (
  <input type={type} name={name} placeholder={placeholder} onChange={onChange} className="form-input" />
);

export default FormInput;
