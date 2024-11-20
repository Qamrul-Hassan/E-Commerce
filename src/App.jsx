import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RouteLayout from './Pages/RouteLayout';
import Home from './Pages/Home';
import Shop from './Pages/Shop';





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouteLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/Shop" element={<Shop />} />
      
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
