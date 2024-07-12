import {ContainerList, Numbert, Text, TextRaite, Button, ContainerBanner, ContainerSale} from './Banner1.styled';

export const Banner1=()=>{
    return(
       
          <ContainerList>
             <ContainerBanner>
                <Numbert>1</Numbert>
                <Text>Huge Sale</Text>
             </ContainerBanner>
             <ContainerSale>
                <TextRaite>70%</TextRaite>
                <Button type='button'>Shop now</Button>
             </ContainerSale>
          </ContainerList>
      
    )
}