import React from 'react';

export default function Input(props) {
  const { func, placeholder, setChecked, type, value } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={({ target }) => {
        if (type === "checkbox") {
          setChecked(target.checked);
          func(value.toLowerCase());
        } else {
          func(target.value);
        }
      }}
    />
  );
};
