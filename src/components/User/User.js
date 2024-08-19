import {Container, Text} from './User.styled';
import {selectUser} from '../../redux/auth/selects';
import { useSelector } from 'react-redux';

export const User=()=>{
    const user =useSelector(selectUser);
    return(
        <Container>
            <Text>{user.email||""}</Text>
        </Container>
    )
}