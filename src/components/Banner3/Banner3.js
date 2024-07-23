import {ContainerList, Numbert, Text, TextRaite, Button, ContainerBanner, ContainerSale} from './Banner3.styled';
import { useNavigate } from 'react-router-dom';

export const Banner3=()=>{
   const navigator = useNavigate(); 
   const handleHomeMedicine = () => {
      navigator('/medicine');     
 };

    return(
        <>
        <ContainerList>
             <ContainerBanner>
                <Numbert>3</Numbert>
                <Text>Off</Text>
             </ContainerBanner>
             <ContainerSale>
                <TextRaite>35%</TextRaite>
                <Button type='button' onClick={handleHomeMedicine}>Shop now</Button>
             </ContainerSale>
          </ContainerList>
        </>
    )
}