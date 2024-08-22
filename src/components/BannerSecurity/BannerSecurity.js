import {ContainerList, Numbert, Text, TextRaite, Button, ContainerBanner, ContainerSale} from './BannerSecurity.styled';

export const BannerSecurity=()=>{
    return(
            <ContainerList>
             <ContainerBanner>
                <Numbert>2</Numbert>
                <Text>Secure delivery</Text>
             </ContainerBanner>
             <ContainerSale>
                <TextRaite>100%</TextRaite>
                <Button type='button'>Read more</Button>
             </ContainerSale>
          </ContainerList>
    )
}