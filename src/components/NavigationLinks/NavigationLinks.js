import {Button} from './NavigationLinks.styled';
import { useNavigate } from 'react-router-dom';

export const NavigationLinks=()=>{
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
        <>
           <Button type="button" onClick={handleHomeClick}> Home</Button>
           <Button type="button" onClick={handleHomeMedicineStore}> Medicine store</Button>
           <Button type="button" onClick={handleHomeMedicine}> Medicine</Button>
        </>
    )
}