import { Logo } from '../Logo/Logo';
import { ContaterHeder, Svg, ContainerSvgCart, ContainerNavigate, CounterCarts } from './Header.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import { useEffect, useState } from 'react';
import { Burgermenu } from 'components/Burgermenu/Burgermenu';
import { NavigationLinks } from 'components/NavigationLinks/NavigationLinks';
import {selectIdOrders} from '../../redux/selects';
import { useSelector } from 'react-redux';


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1440);

  const location = useLocation();
  const navigate = useNavigate();
  const orders = useSelector(selectIdOrders);
  const numberOfOrders = orders.length;

  const isHome = location.pathname === '/home';
  const isMedicine = location.pathname === '/medicine';
  const isStore = location.pathname === '/medicine-store'; 
  const isProduct = location.pathname === '/product';

  const handleNavigate = () => {
    navigate('/cart');
  }

  const handleBurgerMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1440);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ContaterHeder $isHome={isHome}>
      <Logo />

      {!isTablet&&(
             <NavigationLinks stylefooter={true} isHeader={true}/>
        )}


      <ContainerNavigate>
        {(isMedicine || isStore || isProduct) && (
          <ContainerSvgCart>
            <svg width={16} height={16} onClick={handleNavigate}>
              <use xlinkHref={sprite + '#icon-shopping-cart'} />
            </svg>
            <CounterCarts>{numberOfOrders}</CounterCarts>
          </ContainerSvgCart>
        )}
        
        {(isHome && isTablet) && (
          <Svg onClick={handleBurgerMenu}>
            <use xlinkHref={sprite + '#icon-burgermenu'} />
          </Svg>
        )} 
        
        {((isMedicine||isStore||isProduct)&& isTablet) && (
          <Svg onClick={handleBurgerMenu}>
            <use xlinkHref={sprite + '#icon-burgermenu-green'} />
          </Svg>
        )}
      </ContainerNavigate>

      {isOpen && <Burgermenu onClose={handleBurgerMenu} />}
    </ContaterHeder>
  );
}
