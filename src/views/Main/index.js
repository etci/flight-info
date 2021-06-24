import { BrowserRouter } from 'react-router-dom';
import Content from './Content';
import Header from './Header';
import './style.scss';

const Main = () => {
  return (
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  );
};

export default Main;
