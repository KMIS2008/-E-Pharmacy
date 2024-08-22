import {ContainerList, Numbert, Text, TextRaite, Button, ContainerBanner, ContainerSale} from './BannerMaxSale.styled';
import { useNavigate } from 'react-router-dom';

export const BannerMaxSale=()=>{
   const navigator = useNavigate(); 
   const handleHomeMedicine = () => {
      navigator('/medicine');     
 };

    return(
       
          <ContainerList>
             <ContainerBanner>
                <Numbert>1</Numbert>
                <Text>Huge Sale</Text>
             </ContainerBanner>
             <ContainerSale>
                <TextRaite>70%</TextRaite>
                <Button type='button' onClick={handleHomeMedicine}>Shop now</Button>
             </ContainerSale>
          </ContainerList>
      
    )
}