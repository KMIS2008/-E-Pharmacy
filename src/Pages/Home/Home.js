import {ContainerHome, ContainerMainBanner} from "./Homestyled";
import{MainBanner} from '../../components/MainBanner/MainBanner';
import {PromoBanners} from '../../components/PromoBanners/PromoBanners';


export default function Home(){
return (
    <ContainerHome>
       <ContainerMainBanner>
         <MainBanner/>
       </ContainerMainBanner>
       <PromoBanners/>
       
    </ContainerHome>
)
}