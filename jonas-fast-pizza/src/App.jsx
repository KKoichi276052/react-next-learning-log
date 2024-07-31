import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Menu from './features/menu/Menu';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';
import Cart from './features/cart/Cart';
import Error from './ui/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/order/new',
    element: <CreateOrder />,
  },
  {
    path: '/order/:orderId',
    element: <Order />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
