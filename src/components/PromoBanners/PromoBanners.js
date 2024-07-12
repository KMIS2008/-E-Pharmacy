import { Banner1 } from "components/Banner1/Banner1";
import {ContainerList} from './PromoBanners.styled';
import {Banner2} from '../../components/Banner2/Banner2';
import {Banner3} from '../../components/Banner3/Banner3';

export const PromoBanners=()=>{
    return(
        <ContainerList>
           <Banner1/>
           <Banner2/>
           <Banner3/>
        </ContainerList>
    )
}