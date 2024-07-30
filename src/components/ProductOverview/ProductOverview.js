import { useSelector } from 'react-redux';
import {selectIdProducts} from '../../redux/selects';
import {Container, Img, ContainerTitle, Title, Text, TextBrand, ContainerСounter,
       Сounter, CounterNumber, Button, ContainerButtons, ContainerInfo
} from './ProductOverview.styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductOverview=()=>{
    const product=useSelector(selectIdProducts);
    const [counter, setCounter] = useState(1); 
    const navigate=useNavigate();

    const handleIncrement = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    const handleDecrement = () => {
        setCounter(prevCounter => (prevCounter > 1 ? prevCounter - 1 : 1)); // Предотвращение уменьшения ниже 1
    };

    const handleAddCart=()=>{
        navigate('/cart')
    }


if (!product) {
    return <div>Loading...</div>; // или другой индикатор загрузки
}
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
                        <Сounter type="button" onClick={handleIncrement}>+</Сounter>
                        <CounterNumber>{counter}</CounterNumber>
                        <Сounter type="button" onClick={handleDecrement}>-</Сounter>
                  </ContainerСounter>  
 
                  <Button type="button" onClick={handleAddCart}>Add to cart</Button>             
               </ContainerButtons>
           </ContainerInfo>
        </Container>
    )
}