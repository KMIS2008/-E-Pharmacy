import {ContainerHome, ContainerMainBanner} from "./Homestyled";
import{MainBanner} from '../../components/MainBanner/MainBanner';
import {PromoBanners} from '../../components/PromoBanners/PromoBanners';
import {MedicineStores} from '../../components/MedicineStores/MedicineStores';
// import {ListofStores} from '../../components/ListofStores/ListofStores';
import {AddPharmacyPromoSection} from '../../components/AddPharmacyPromoSection/AddPharmacyPromoSection';
import {ReviewsSection} from '../../components/ReviewsSection/ReviewsSection';

export default function Home(){
return (
    <ContainerHome>
       <ContainerMainBanner>
         <MainBanner/>
       </ContainerMainBanner>

       <PromoBanners/>

       <MedicineStores/>

       {/* <ListofStores/> */}

       <AddPharmacyPromoSection/>

       <ReviewsSection/>
       
    </ContainerHome>
)
}