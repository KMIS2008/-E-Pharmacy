import { BannerMaxSale } from "components/BannerMaxSale/BannerMaxSale";
import {ContainerList} from './PromoBanners.styled';
import {BannerSecurity} from '../BannerSecurity/BannerSecurity';
import {BannerSale} from '../BannerSale/BannerSale';

export const PromoBanners=()=>{
    return(
        <ContainerList>
           <BannerMaxSale/>
           <BannerSecurity/>
           <BannerSale/>
        </ContainerList>
    )
}