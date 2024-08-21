import { Logo } from "components/Logo/Logo";
import {Contater, Text, Line, ContainerCopyright, CotnainerLinks, ContainerSpecial} from './Footer.styled';
import {NavigationLinks} from '../NavigationLinks/NavigationLinks';
import {FooterBottom} from '../FooterBottom/FooterBottom';
import {FooterLinks} from '../FooterLinks/FooterLinks';
import {SocialMediaIcons} from '../SocialMediaIcons/SocialMediaIcons';
import { useEffect, useState } from 'react';

export const Footer=()=>{
    const stylefooter=true;
    const [isTablet, setisTablet] = useState(window.innerWidth > 768);

    useEffect(() => {
      const handleResize = () => {
        setisTablet(window.innerWidth > 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return(
        <Contater>
            <CotnainerLinks>
               <div>
                  <Logo stylefooter={stylefooter}/>
                  <Text>
                     Get the medicine to help you feel better, 
                     get back to your active life, and enjoy every moment.
                  </Text>                
               </div>
               <ContainerSpecial>
                 <NavigationLinks stylefooter={stylefooter} styledisplay={true}/>
                 {isTablet&& <SocialMediaIcons />  }
                 
               </ContainerSpecial>                
            </CotnainerLinks>

            <Line></Line>
            <ContainerCopyright>
               <FooterBottom/>
               <FooterLinks/>                
            </ContainerCopyright>

        </Contater>
    )
}