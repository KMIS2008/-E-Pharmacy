import { useDispatch, useSelector} from "react-redux";
import {  addCart, fetchIdProducts} from "redux/operations";
import {Container, Img, ContainerTitle, Title, Text, Button,
    ButtonDetails,
} from './Products.styled';
import { useNavigate } from "react-router-dom";
import {selectIsLoggedIn} from '../../redux/auth/selects';
import { useState } from "react";
import {RegisterModal} from '../RegisterModal/RegisterModal';


export const Products=({products})=>{
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const loggined = useSelector(selectIsLoggedIn);
    const[isOpenRegisterModal, setOpenRegisterModal]=useState(false);
    const [isModal, setModal]=useState(false);

    const handlClickIdProduct=(_id)=>{
        dispatch(fetchIdProducts(_id))
        navigate('/product')
    }

    const handleAddCart=(product)=>{
        const { id, ...productWithoutId } = product;
        const productWithQuantity = { ...productWithoutId, quantity: 1 };
        if(loggined){
         dispatch(addCart(productWithQuantity));
        navigate('/cart');           
        }
        else{
            setOpenRegisterModal(true);
            setModal(true);
        }
    }

 
    return(
        <>
          <Container>
            {products.map(product=>(
                <li key={product._id}>
                    <Img src={product.photo} alt="drug"/>
                    <ContainerTitle>
                       <Title>{product.name}</Title>
                       <Text>৳{product.price}</Text>                
                    </ContainerTitle>
                    <ContainerTitle>
                        <Button type="button" onClick={() => handleAddCart(product)}>Add to cart</Button>
                        <ButtonDetails type="button" onClick={()=>handlClickIdProduct(product._id)}>Details</ButtonDetails>
                    </ContainerTitle>
                </li>
            ))}
          </Container>
          <RegisterModal isModal={isModal} setOpenRegisterModal={setOpenRegisterModal} isOpenRegisterModal={isOpenRegisterModal} />
        </>
    )
}