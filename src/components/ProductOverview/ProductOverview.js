import { useSelector } from 'react-redux';
import {selectIdProducts} from '../../redux/selects';
import {Container, Img, ContainerTitle, Title, Text, TextBrand, ContainerСounter,
       Сounter, CounterNumber, Button, ContainerButtons, ContainerInfo
} from './ProductOverview.styled';

export const ProductOverview=()=>{
    const product=useSelector(selectIdProducts)
console.log(product)
   const{photo, name, price, suppliers} =product;
    return(
        <Container>
           <Img src={photo} alt='drug'/>
           <ContainerInfo>
              <ContainerTitle>
                <div>
                  <Title>{name}</Title> 
                  <TextBrand>Brand:  {suppliers}</TextBrand> 
                </div>
                 
                 <Text>৳{price}</Text>                
               </ContainerTitle>
               
               <ContainerButtons>
                  <ContainerСounter>
                    <Сounter type="buton">+</Сounter>
                    <CounterNumber>1</CounterNumber>
                    <Сounter type="buton">-</Сounter>
                  </ContainerСounter>  
 
                  <Button type="button">Add to cart</Button>             
               </ContainerButtons>
           </ContainerInfo>

        
        </Container>
    )
}