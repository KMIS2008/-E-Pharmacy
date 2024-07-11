import { Logo } from "components/Logo/Logo";
import {Contater, Text, Line, ContainerCopyright} from './Footer.styled';
import {NavigationLinks} from '../NavigationLinks/NavigationLinks';
import {FooterBottom} from '../FooterBottom/FooterBottom';
import {FooterLinks} from '../FooterLinks/FooterLinks';

export const Footer=()=>{
    return(
        <Contater>
            <Logo/>
            <Text>
              Get the medicine to help you feel better, 
              get back to your active life, and enjoy every moment.
            </Text>

            <NavigationLinks/>
            <Line></Line>
            <ContainerCopyright>
               <FooterBottom/>
               <FooterLinks/>                
            </ContainerCopyright>

        </Contater>
    )
}