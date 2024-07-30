import {ProductOverview} from '../../components/ProductOverview/ProductOverview';
import {TabsContainer} from '../../components/TabsContainer/TabsContainer';
import {Container} from './ProductPage.styled';

export default function  ProdactPage(){
    return(
        <Container>
           <ProductOverview/>
           <TabsContainer/>
        </Container>
    )
}