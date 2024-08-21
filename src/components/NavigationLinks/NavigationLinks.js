import {Container, Button} from './NavigationLinks.styled';
import { useNavigate, useLocation  } from 'react-router-dom';

export const NavigationLinks=({stylefooter=false, isHeader=false, styledisplay=false})=>{
    const navigator = useNavigate(); 
    const location = useLocation();

    const handleHomeClick = () => {
        navigator('home');     
    };
    const handleHomeMedicineStore = () => {
        navigator('medicine-store');     
    };
    const handleHomeMedicine = () => {
        navigator('medicine');     
    };

    const isHomeActive = location.pathname === '/home';
    const isMedicineStoreActive = location.pathname === '/medicine-store';
    const isMedicineActive = location.pathname === '/medicine';

    return(
        <Container $styledisplay={styledisplay}>
           <Button $stylefooter={stylefooter} 
                   $isHeader={isHeader} 
                   $isActiveHome={isHomeActive}
                   type="button" 
                   style={{
                      backgroundColor: isHomeActive? 'transparent' : 'white',
                         color: isHomeActive ? 'white' : '#93939A',
                         border: isHomeActive&&!stylefooter ? '4px solid white' : '1.15px solid #F1F1F1',
                }}
            > Home</Button>

           <Button $stylefooter={stylefooter} 
                   $isHeader={isHeader} 
                   type="button" 
                   onClick={handleHomeMedicineStore}
                   style={{
                       backgroundColor: isMedicineStoreActive ? '#59B17A' : 'white',
                       color: isMedicineStoreActive ? 'white' : '#93939A',
                       border: isMedicineStoreActive&&!stylefooter ? '4px solid white' : '1.15px solid #F1F1F1',
                   }}
            > Medicine store</Button>

           <Button $stylefooter={stylefooter} 
                   $isHeader={isHeader} 
                   type="button" 
                   onClick={handleHomeMedicine}
                   style={{
                      backgroundColor: isMedicineActive ? '#59B17A' : 'white',
                      color: isMedicineActive ? 'white' : '#93939A',
                      border: isMedicineActive&&!stylefooter ? '4px solid white' : '1.15px solid #F1F1F1',
                   }}
            > Medicine</Button>
        </Container>
    )
}



// border: 4px solid  ${p=>p.theme.colors.white};