import { GlobalStyle } from './GlobalStyle';
import { Audio } from 'react-loader-spinner'

import {useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import { useAuth } from 'redux/hook/useAuth';
import { refreshUser } from 'redux/auth/operations';
// import { RestrictedRoute } from './RestrictedRoute'; 
// import { PrivateRoute } from './PrivateRoute';

import { lazy, Suspense  } from 'react';
const Home = lazy(()=> import('Pages/Home/Home'));
const MedicineStorePage = lazy(()=> import('Pages/MedicineStorePage/MedicineStorePage'));
const MedicinePage = lazy(()=> import('Pages/MedicinePage/MedicinePage'));
const ProdactPage = lazy(()=> import('Pages/ProductPage/ProductPage'));

// const Reistr = lazy(()=> import('Pages/Registr/Registr'));
// const Login = lazy(()=> import ('Pages/Login/Login'));
// const ErrorPage = lazy(()=> import ('Pages/ErrorPage/ErrorPage'));

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
             <Route path="home" element={<Home/>}/>
             <Route path="medicine-store" element={<MedicineStorePage/>}/>
             <Route path="medicine" element={<MedicinePage/>}/>
             <Route path='product' element={<ProdactPage/>}/>
             
              {/* <Route path="home" element={<Home/>}/> */}
              {/* <Route path="register" element = { <RestrictedRoute redirectTo="/profile" component={<Reistr />} />}/>
              <Route path = "login" element ={<RestrictedRoute redirectTo="/profile" component={<Login/>} />}/> */}
              {/* <Route path="news" element={<News/>}/>
              <Route path="notices" element= { <Notices/>} /> */}
              {/* <Route path="add-pet" element={ <PrivateRoute redirectTo="/login" component={<AddPet/>} />}/>
              <Route path="friends" element={<FriendPage/>}/>
              <Route path="profile" element={ <PrivateRoute redirectTo="/login" component={<Profile/>} />}/>
              <Route path="*" element={<ErrorPage/>} /> */}
            </Route>
          </Routes>
          </Suspense>

     <GlobalStyle/>
</div>
  )
    };
    
