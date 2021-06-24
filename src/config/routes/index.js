import FlightDetail from '../../views/components/FlightDetail';
import FlightList from '../../views/components/FlightList';

const routes = {
  FLIGHT_LIST: {
    title: 'Flight List',
    path: '/flight-list',
    component: FlightList,
  },
  FLIGHT_DETAIL: {
    title: 'Flight Detail',
    path: '/flight-detail',
    component: FlightDetail,
  },
};

export default routes;
