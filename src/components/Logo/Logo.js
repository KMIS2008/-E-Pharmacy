import logoMobileHome from '../../images/logoMobileHome.png';
import logoMobile from '../../images/logoMobile.png';
import {ContaterLogo, ImgLogo, TextLogo} from './Logo.styled';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Logo=()=>{
    const location = useLocation();
    const isHome = location.pathname === '/home';
    const navigator = useNavigate(); 

    const handleHomeClick = () => {
        navigator('home');     
    };

    return(
        <ContaterLogo onClick={handleHomeClick}>
        
            {isHome? (<ImgLogo src={logoMobileHome} alt='logo'/>):
                     (<ImgLogo src={logoMobile} alt='logo'/>)}

            <TextLogo $isHome={isHome}>E-Pharmacy</TextLogo>
        </ContaterLogo>
    )
}