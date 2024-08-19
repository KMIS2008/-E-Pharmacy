import {Container, Text, Button, Title} from './ErrorPage.styled';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage(){
    const navigator = useNavigate(); 
    const handleNavigate=()=>{
        navigator('/')
    }

    return(
        <>
        <Container>      
            <Title>404</Title>
            <Text>Ooops! This page not found :</Text>
            <Button type='button' onClick={handleNavigate}>To home page</Button>
        </Container>
        </>
    )
}