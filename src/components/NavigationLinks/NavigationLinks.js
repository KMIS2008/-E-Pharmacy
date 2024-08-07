import {Container, Button} from './NavigationLinks.styled';
import { useNavigate } from 'react-router-dom';

export const NavigationLinks=({stylefooter=false, isHeader=false})=>{
    const navigator = useNavigate(); 
    const handleHomeClick = () => {
        navigator('home');     
    };
    const handleHomeMedicineStore = () => {
        navigator('medicine-store');     
    };
    const handleHomeMedicine = () => {
        navigator('medicine');     
    };

    return(
        <Container $stylefooter={stylefooter}>
           <Button $stylefooter={stylefooter} $isHeader={isHeader} type="button" onClick={handleHomeClick}> Home</Button>
           <Button $stylefooter={stylefooter} $isHeader={isHeader} type="button" onClick={handleHomeMedicineStore}> Medicine store</Button>
           <Button $stylefooter={stylefooter} $isHeader={isHeader} type="button" onClick={handleHomeMedicine}> Medicine</Button>
        </Container>
    )
}