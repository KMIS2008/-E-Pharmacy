import { Tittle } from "components/Title/Title";
import {Container} from './LoginPage.styled';
import {LoginForm} from '../../components/Login/login.js';

export default function  LoginPage(){
    return(
        <Container>
            <Tittle/>
            <LoginForm/>
        </Container>
    )
}