import {Container, Button} from './NavigationLinks.styled';
import {useLocation} from 'react-router-dom';


export const NavigationLinks=({stylefooter=false, isHeader=false, styledisplay=false, setIsOpen= () => {}, onClose= () => setIsOpen(false)})=>{
    const location = useLocation();

    const handleHomeClick = () => {    
        onClose();
    };
    const handleHomeMedicineStore = () => {
        onClose();   
    };
    const handleHomeMedicine = () => {
        onClose();     
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
                   onClick={handleHomeClick}
                   to="/home"
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
                   to="/medicine-store"
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
                   to="/medicine"
                   style={{
                      backgroundColor: isMedicineActive ? '#59B17A' : 'white',
                      color: isMedicineActive ? 'white' : '#93939A',
                      border: isMedicineActive&&!stylefooter ? '4px solid white' : '1.15px solid #F1F1F1',
                   }}
            > Medicine</Button>
        </Container>
    )
}