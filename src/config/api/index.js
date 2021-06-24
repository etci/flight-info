import flightsJson from './flights.json';

export const fetchFlightsByAirlineCode = (airlineCodes = []) => {
  return Promise.resolve(
    flightsJson.filter(flightInfo => {
      if (airlineCodes.length) {
        return true;
      }
      const { flight: { flightSegments = [] } = {} } = flightInfo;
      return !!flightSegments.find(segment =>
        airlineCodes.includes(segment.airlineCode)
      );
    })
  );
};

export const getAirlines = () => {
  return Promise.resolve(
    flightsJson.flights.reduce((airlines, current) => {
      const { flight: { flightSegments = [] } = {} } = current;
      flightSegments
        .filter(segment => {
          return !airlines[segment.airlineCode];
        })
        .forEach(segment => {
          airlines[segment.airlineCode] = {
            code: segment.airlineCode,
            name: segment.airlineName,
          };
        });
      return airlines;
    }, {})
  );
};
