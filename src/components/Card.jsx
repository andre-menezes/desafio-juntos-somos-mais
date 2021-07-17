import React from 'react';

export default function Card(props) {
  const { location, name, picture } = props;
  const { city, postcode, state, street } = location;
  const { first, last } = name;
  const { large } = picture;

  const capitalize = (text) => {
    return text.replace(/(?:^|\s)\S/g, (first) => first.toUpperCase());
  }

  const fullName = `${capitalize(first)} ${capitalize(last)}`;

  return (
    <div>
      <img src={ large } alt={ fullName } />
      <h2>{fullName}</h2>
      <div>
        <span>{capitalize(street)}</span>
        <span>{capitalize(city)}</span>
        <span>{`${capitalize(state)} - CEP: ${postcode}`}</span>
      </div>
    </div>
  )
}
