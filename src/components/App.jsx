import { GlobalStyle } from './GlobalStyle';
import { Audio } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';

import {useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import { useAuth } from 'hook/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute'; 
import { PrivateRoute } from './PrivateRoute';

import { lazy, Suspense  } from 'react';

const Home = lazy(()=> import('Pages/Home/Home'));
const MedicineStorePage = lazy(()=> import('Pages/MedicineStorePage/MedicineStorePage'));
const MedicinePage = lazy(()=> import('Pages/MedicinePage/MedicinePage'));
const ProdactPage = lazy(()=> import('Pages/ProductPage/ProductPage'));
const CartPage = lazy(()=> import('Pages/CartPage/CartPage'));
const RegisterPage= lazy(()=> import('Pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(()=> import ('Pages/LoginPage/LoginPage'));

const ErrorPage = lazy(()=> import ('Pages/ErrorPage/ErrorPage'));

    export const App =()=> {
      const dispatch = useDispatch();

      const { isRefreshing } = useAuth();
    
      useEffect(() => {
        dispatch(refreshUser());
    
      }, [dispatch]);
    
      return isRefreshing ? (
        <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
  ) : (
<div>
<Suspense fallback={       
        <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />}>
          <Routes>
             <Route path = "/" element = {<SharedLayout/>}>
             <Route index element={<Navigate to="/home" />} />
             <Route path="home" element={<Home/>}/>
             <Route path="medicine-store" element={<MedicineStorePage/>}/>
             <Route path="medicine" element={<MedicinePage/>}/>
             <Route path='product' element={<ProdactPage/>}/>
             <Route path='register' element={<RegisterPage/>}/>
             <Route path = "login" element ={<RestrictedRoute redirectTo="/" component={<LoginPage/>} />}/>
             <Route path="cart" element={ <PrivateRoute redirectTo="/login" component={<CartPage/>} />}/>
             <Route path="*" element={<ErrorPage/>} />
            </Route>
          </Routes>
          </Suspense>

     <GlobalStyle/>
</div>
  )
    };
    
