import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts, fetchIdProducts} from "redux/operations";
import { selectProducts } from "redux/selects";
import {Container, Img, ContainerTitle, Title, Text, Button,
    ButtonDetails,
} from './Products.styled';
import { useNavigate } from "react-router-dom";

export const Products=({products})=>{
    const dispatch = useDispatch();
    // const products=useSelector(selectProducts);
    const navigate= useNavigate();
    const [ispageNumber, setIsPageNumber] = useState(1);

    // const handleChangeNewPage=(number)=>{
    //     setIsPageNumber(number);
    // }
 

    // useEffect(()=>{
    //     dispatch(fetchproducts(ispageNumber))
    // },[dispatch, ispageNumber])

    const handlClickIdProduct=(_id)=>{
        dispatch(fetchIdProducts(_id))
        navigate('/product')
    }

    // const handleChangePage=(number)=>{
    //     setIsPageNumber(number);
    // }


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
                        <Button type="button">Add to cart</Button>
                        <ButtonDetails type="button" onClick={()=>handlClickIdProduct(product._id)}>Details</ButtonDetails>
                    </ContainerTitle>

                </li>
            ))}
          </Container>
        </>
    )
}