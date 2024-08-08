import { Suspense } from "react";
import { Outlet, useLocation} from "react-router-dom";
import {Contater} from './SharedLayout.styled';
import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';

 const SharedLayout=()=>{
    const location= useLocation();

    const isHome = location.pathname === '/home';
    const isMedicine = location.pathname === '/medicine';
    const isStore = location.pathname === '/medicine-store'; 
    const isProduct = location.pathname === '/product';
    
    return (
        <Contater>
            <Header/>
                <main>
                   <Suspense fallback={<div>Loading...</div>}>
                      <Outlet />
                   </Suspense>
                </main>   
           {(isHome||isMedicine||isStore||isProduct) && <Footer/>}
        </Contater>
    )
}

export default SharedLayout;