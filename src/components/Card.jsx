import React from 'react';

export default function Card(props) {
  const { location, name, picture, testid } = props;
  const { city, postcode, state, street } = location;
  const { first, last } = name;
  const { large } = picture;

  const capitalize = (text) => {
    return text.replace(/(?:^|\s)\S/g, (first) => first.toUpperCase());
  }

  const fullName = `${capitalize(first)} ${capitalize(last)}`;

  return (
    <div className="card" data-testid={ testid }>
      <img src={ large } alt={ fullName } />
      <h2>{fullName}</h2>
      <div className="address-content">
        <span>{capitalize(street)}</span>
        <span>{`${capitalize(city)} - ${capitalize(state)}`}</span>
        <span>{`CEP: ${postcode}`}</span>
      </div>
    </div>
  )
}
