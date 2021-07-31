import React from 'react';

export default function Input(props) {
  const { testid, className, func, placeholder, setChecked, type, value } = props;
  return (
    <input
      data-testid={ testid }
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
