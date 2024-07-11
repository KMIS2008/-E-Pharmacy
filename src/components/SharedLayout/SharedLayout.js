import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {Contater} from './SharedLayout.styled';
import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';

 const SharedLayout=()=>{
    return (
        <Contater>
            <Header/>
                <main>
                   <Suspense fallback={<div>Loading...</div>}>
                      <Outlet />
                   </Suspense>
                </main>   
            <Footer/>
        </Contater>
    )
}

export default SharedLayout;