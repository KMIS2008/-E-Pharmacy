import { useDispatch} from "react-redux";
import {  fetchIdProducts} from "redux/operations";
import {Container, Img, ContainerTitle, Title, Text, Button,
    ButtonDetails,
} from './Products.styled';
import { useNavigate } from "react-router-dom";

export const Products=({products})=>{
    const dispatch = useDispatch();
    const navigate= useNavigate();

    const handlClickIdProduct=(_id)=>{
        dispatch(fetchIdProducts(_id))
        navigate('/product')
    }

    const handleAddCart=()=>{
        navigate('/cart')
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
                        <Button type="button" onClick={handleAddCart}>Add to cart</Button>
                        <ButtonDetails type="button" onClick={()=>handlClickIdProduct(product._id)}>Details</ButtonDetails>
                    </ContainerTitle>

                </li>
            ))}
          </Container>
        </>
    )
}