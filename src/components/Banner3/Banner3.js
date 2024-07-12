import {ContainerList, Numbert, Text, TextRaite, Button, ContainerBanner, ContainerSale} from './Banner3.styled';

export const Banner3=()=>{
    return(
        <>
        <ContainerList>
             <ContainerBanner>
                <Numbert>3</Numbert>
                <Text>Off</Text>
             </ContainerBanner>
             <ContainerSale>
                <TextRaite>35%</TextRaite>
                <Button type='button'>Read more</Button>
             </ContainerSale>
          </ContainerList>
        </>
    )
}