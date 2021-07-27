import React from 'react';

export default function Input(props) {
  const { className, func, placeholder, setChecked, type, value } = props;
  return (
    <input
      className={ className }
      type={ type }
      placeholder={ placeholder }
      onChange={ ({ target }) => {
        if (type === "checkbox") {
          setChecked(target.checked);
          func(value.toLowerCase());
        } else {
          func(target.value);
        }
      } }
    />
  );
};
