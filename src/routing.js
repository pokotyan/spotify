import Top from './container/Top';
import CallBack from './container/SpotifyCallBack';
import Home from './container/Home';
import About from './container/About';
import NotFound from './components/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: Top,
  },
  {
    path: '/callback',
    component: CallBack,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    component: NotFound,
  },
];

export default routes;
