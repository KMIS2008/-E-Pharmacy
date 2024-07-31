import {HeaderStores} from '../../components/HeaderStores/HeaderStores';
import { ShippingInfo } from 'components/ShippingInfo/ShippingInfo';
import {Container} from './CartPage.styled';

export default function CartPage(){
    return(
        <Container>
          <HeaderStores title={'Cart'}/>
          <ShippingInfo/>
        </Container>
    )
}