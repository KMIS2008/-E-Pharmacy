import {HeaderStores} from '../../components/HeaderStores/HeaderStores';
import { ShippingInfo } from 'components/ShippingInfo/ShippingInfo';
import {Container, ContainerCart} from './CartPage.styled';
import {Order} from '../../components/Order/Order';

export default function CartPage(){
    return(
        <Container>
          <HeaderStores title={'Cart'}/>
          <ContainerCart>
             <ShippingInfo/>
             <Order/>            
          </ContainerCart>
        </Container>
    )
}


