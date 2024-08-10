import { useNavigate } from 'react-router-dom';
import {Container, Button} from './AuthenticationLinks.styled';

export const AuthenticationLinks=()=>{
    const navigate=useNavigate();
    const handleNavigateLogin=()=>{
        navigate('/login')
    }
    const handleNavigateRegister=()=>{
        navigate('/register')
    }
    return(
        <Container>
           <Button type="button" onClick={handleNavigateRegister}>Register</Button>
           <Button type="button" onClick={handleNavigateLogin}>Login</Button>
        
        </Container>
    )
}