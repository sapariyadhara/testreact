import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './container/Home';
import Product from './container/Product';
import Login from './container/Login/Login';
import ProtectedRoutes from './container/ProtectedRoutes';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        {/* <Route element={<ProtectedRoutes />}> */}
          <Route path={'/Product'} element={<ProtectedRoutes to={<Product />} />} />
        {/* </Route> */}
        <Route path={'/Login'} element={<Login />} />
      </Routes>

    </>
  );
}

export default App;
