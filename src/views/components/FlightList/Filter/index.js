import React from 'react';
import './style.scss';
const Filter = ({ airlines }) => {
  const airlineItems = Object.values(airlines).map(({ name, code }) => {
    return (
      <div className="filter-item" key={code}>
        <input type="checkbox" id={code} value={code} name={code} />
        <label for={code}>{name}</label>
      </div>
    );
  });

  return (
    <div className="filter">
      <span className="header">Airlines</span>
      {airlineItems}
    </div>
  );
};

export default Filter;
