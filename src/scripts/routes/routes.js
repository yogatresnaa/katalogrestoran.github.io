import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import favorite from '../views/pages/favorit';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': favorite,
};

export default routes;
