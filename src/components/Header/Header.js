import {Logo} from '../Logo/Logo';
import {ContaterHeder} from './Header.styled';
import { useLocation } from 'react-router-dom';

export const Header=()=>{
  const location = useLocation();
  const isHome = location.pathname === '/home';
  
    return (
        <ContaterHeder $isHome={isHome}>
          <Logo/>
        </ContaterHeder>
    )
}