import { useDispatch, useSelector } from 'react-redux';
import {fetchcart, deleteCart, updateCartQuantity} from '../../redux/operations';
import {selectIdOrders} from '../../redux/selects';
import { useEffect } from 'react';
import {ContainerList, ContainerItem, Img, ContainerСounter,ContainerTitle, Сounter, 
    CounterNumber, ButtonRemove, ContainerButton, Title, Text, Price,
    ContainerInfo, Line} from './Order.styled';


export const Order=()=>{
    const orders =useSelector(selectIdOrders);
    const dispatch=useDispatch();

    const handleDeleteCart=(_id)=>{
        dispatch(deleteCart(_id))
    }

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

    useEffect(()=>{
        dispatch(fetchcart())
    },[dispatch])

    return(
        <>
        <ContainerList>
            {orders.map(order=>(
                <li key={order._id} >
                    <ContainerItem>
                         <Img src={order.photo} alt='drug'/>
                    <ContainerInfo>
                        <ContainerTitle>
                            <div>
                               <Title>{order.name}</Title>
                               <Text>{order.suppliers}</Text>                                
                            </div>
                            <Price>৳ {order.price}</Price>
                        </ContainerTitle>
                        <ContainerButton>
                           <ContainerСounter>
                              <Сounter type="button" onClick={() => handleIncrement(order)}>+</Сounter>
                              <CounterNumber>{order.quantity}</CounterNumber>
                              <Сounter type="button" onClick={() => handleDecrement(order)}>-</Сounter>
                           </ContainerСounter>  

                           <ButtonRemove type='button' onClick={()=>handleDeleteCart(order._id)}>Remove</ButtonRemove>

                        </ContainerButton>
                    </ContainerInfo>

                    </ContainerItem>
                   
                    <Line></Line>
                </li>
            ))}
        </ContainerList>
        </>
    )
}