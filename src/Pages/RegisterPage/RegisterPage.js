import {Container} from './RegisterPage.styled';
import { LoginForm } from 'components/Login/Login';
import { Tittle } from 'components/Title/Title';

export default function RegisterPage(){
    return(
        <Container>
          <Tittle/>
          <LoginForm/>
        </Container>
    )
}
