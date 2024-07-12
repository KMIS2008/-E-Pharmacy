import {ContainerHome, ContainerMainBanner} from "./Homestyled";
import{MainBanner} from '../../components/MainBanner/MainBanner';


export default function Home(){
return (
    <ContainerHome>
       <ContainerMainBanner>
         <MainBanner/>
       </ContainerMainBanner>
       
    </ContainerHome>
)
}