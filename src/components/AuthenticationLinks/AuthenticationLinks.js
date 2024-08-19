import { useNavigate } from 'react-router-dom';
import {Container, Button} from './AuthenticationLinks.styled';
import {selectIsLoggedIn} from '../../redux/auth/selects';
import { useDispatch, useSelector } from 'react-redux';
import {logOut} from '../../redux/auth/operations';


export const AuthenticationLinks=()=>{
    const isLoggeIn=useSelector(selectIsLoggedIn);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleNavigateLogin=()=>{
        navigate('/login')
    }

    const handleNavigateRegister=()=>{
        navigate('/register')
    }

    const handleLogOut=()=>{
        dispatch(logOut())
    }
    return(
        <Container>
            {!isLoggeIn&&(<>
             <Button type="button" onClick={handleNavigateRegister}>Register</Button>
             <Button type="button" onClick={handleNavigateLogin}>Login</Button>
            </>)}
          
           {isLoggeIn&&<Button type="button" onClick={handleLogOut}>LogOut</Button>}
        </Container>
    )
}