import React, { useEffect, useState } from 'react';
import { getAirlines } from '../../../config/api';
import Filter from './Filter';
import List from './List';

const FlightList = () => {
  const [airlines, setAirlines] = useState([]);
  const [flights, setFlights] = useState([]);
  const [filters, setFilters] = useState([]);

  const onFilterChange = event => {};

  useEffect(() => {
    getAirlines().then(setAirlines);
  }, []);
  return (
    <div className="flight-list">
      <Filter airlines={airlines} onFilterChange={onFilterChange} />
      <List flights={flights} />
    </div>
  );
};

export default FlightList;
