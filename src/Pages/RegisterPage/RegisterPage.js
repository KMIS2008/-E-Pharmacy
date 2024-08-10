import {Container} from './RegisterPage.styled';
import { RegisterForm } from 'components/Register/Register';
import { Tittle } from 'components/Title/Title';

export default function RegisterPage(){
    return(
        <Container>
          <Tittle/>
          <RegisterForm/>
        </Container>
    )
}
