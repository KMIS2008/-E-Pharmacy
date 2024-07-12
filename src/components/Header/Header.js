import {Logo} from '../Logo/Logo';
import {ContaterHeder, Svg} from './Header.styled';
import { useLocation } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import { useEffect, useState } from 'react';
import { Burgermenu } from 'components/Burgermenu/Burgermenu';

export const Header=()=>{
  const [isOpen, setIsOpen] = useState(false);
  const [isTablet, setisTablet] = useState(window.innerWidth < 1440);

  const location = useLocation();
  const isHome = location.pathname === '/home';

  const handleBurgerMenu=()=>{
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setisTablet(window.innerWidth < 1440);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <ContaterHeder $isHome={isHome}>
          <Logo/>
          {isHome&&isTablet?(
               <Svg onClick={handleBurgerMenu}>
                 <use xlinkHref={sprite + '#icon-burgermenu'}/>
               </Svg>            
              ):(
               <Svg onClick={handleBurgerMenu}>
                 <use xlinkHref={sprite + '#icon-burgermenu-green'}/>
               </Svg>
          )}

          {isOpen?<Burgermenu onClose={handleBurgerMenu}/>:null}


        </ContaterHeder>
    )
}