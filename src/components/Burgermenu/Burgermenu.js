import {NavigationLinks} from '../NavigationLinks/NavigationLinks';
import {Container, CloseIcon} from './Burgermenu.styled';
import sprite from '../../images/sprite.svg';
import {AuthenticationLinks} from '../AuthenticationLinks/AuthenticationLinks';


export const Burgermenu=({onClose})=>{
    
    return(
        <Container>

              <CloseIcon onClick={onClose}>
                <use xlinkHref={sprite + '#icon-x-1'}/>
              </CloseIcon>

               <NavigationLinks onClose={onClose}/>   
               <AuthenticationLinks/>         

        </Container>
    )
}