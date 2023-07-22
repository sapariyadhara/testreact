import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './container/Home';
import Product from './container/Product';
import Login from './container/Login/Login';
import ProtectedRoutes from './container/ProtectedRoutes';
import Course from './container/Course/Course';
import { Provider } from 'react-redux';
import { configurStore } from './redux/store';

function App() {
  const store = configurStore()
  return (
    <>
      <Provider store={store}>


        <Course />
        {/* <Header />
      <Routes>
        <Route path={'/'} element={<Home />} /> */}
        {/* <Route element={<ProtectedRoutes />}> */}
        {/* <Route path={'/Product'} element={<ProtectedRoutes to={<Product />} />} /> */}
        {/* </Route> */}

        {/* <Route path={'/Login'} element={<Login />} /> */}
        {/* </Routes> */}
      </Provider>
    </>
  );
}

export default App;
