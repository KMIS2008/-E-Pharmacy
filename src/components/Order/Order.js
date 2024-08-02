import { useDispatch, useSelector } from 'react-redux';
import {fetchcart} from '../../redux/operations';
import {selectIdOrders} from '../../redux/selects';
import { useEffect, useState } from 'react';
import {ContainerList, ContainerItem, Img, ContainerСounter,ContainerTitle, Сounter, 
    CounterNumber, ButtonRemove, ContainerButton, Title, Text, Price,
    ContainerInfo, Line} from './Order.styled';


export const Order=()=>{
    const orders =useSelector(selectIdOrders);
    const dispatch=useDispatch();
    const [counter, setCounter] = useState(1); 

    const handleIncrement = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    const handleDecrement = () => {
        setCounter(prevCounter => (prevCounter > 1 ? prevCounter - 1 : 1)); // Предотвращение уменьшения ниже 1
    };

    useEffect(()=>{
        dispatch(fetchcart())
    })

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
                              <Сounter type="button" onClick={handleIncrement}>+</Сounter>
                              <CounterNumber>{counter}</CounterNumber>
                              <Сounter type="button" onClick={handleDecrement}>-</Сounter>
                           </ContainerСounter>  

                           <ButtonRemove type='button'>Remove</ButtonRemove>

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