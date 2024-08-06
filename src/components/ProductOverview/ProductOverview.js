import { useDispatch, useSelector } from 'react-redux';
import {selectIdProducts} from '../../redux/selects';
import {Container, Img, ContainerTitle, Title, Text, TextBrand, ContainerСounter,
       Сounter, CounterNumber, Button, ContainerButtons, ContainerInfo
} from './ProductOverview.styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCart } from 'redux/operations';
import {updateCartQuantity} from '../../redux/operations';


export const ProductOverview=()=>{
    const product=useSelector(selectIdProducts);
    const [counter, setCounter] = useState(1); 
    const navigate=useNavigate();
    const dispatch=useDispatch();

    // const handleIncrement = () => {
    //     setCounter(prevCounter => prevCounter + 1);
    // };

    // const handleDecrement = () => {
    //     setCounter(prevCounter => (prevCounter > 1 ? prevCounter - 1 : 1)); // Предотвращение уменьшения ниже 1
    // };

    const handleIncrement = (order) => {
        const newQuantity = (order.quantity || 1) + 1;
        dispatch(updateCartQuantity({ _id: order._id, quantity: newQuantity }));
    };

    const handleDecrement = (order) => {
        const newQuantity = (order.quantity || 1) - 1;
        if (newQuantity > 0) {
            dispatch(updateCartQuantity({ _id: order._id, quantity: newQuantity }));
        }
    };


    const handleAddCart=(product)=>{
        const { id, ...productWithoutId } = product;
        const productWithQuantity = { ...productWithoutId, quantity: 1 };
        dispatch(addCart(productWithQuantity));
        navigate('/cart');
    }


if (!product) {
    return <div>Loading...</div>; // или другой индикатор загрузки
}
   const{photo, name, price, suppliers, quantity} =product;
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
                        <Сounter type="button"onClick={() => handleIncrement(product)}>+</Сounter>
                        <CounterNumber>{quantity|| 1}</CounterNumber>
                        <Сounter type="button" onClick={() => handleDecrement(product)}>-</Сounter>
                  </ContainerСounter>  
 
                  <Button type="button" onClick={()=>handleAddCart(product)}>Add to cart</Button>             
               </ContainerButtons>
           </ContainerInfo>
        </Container>
    )
}