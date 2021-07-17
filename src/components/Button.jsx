import React from 'react';

export default function Button({ label, func, className = '' }) {
  return (
    <button type="button" onClick={ () => func() } className={ className }>
      {label}
    </button>
  );
};
