import {ContainerHome, ContainerMainBanner} from "./Homestyled";
import{MainBanner} from '../../components/MainBanner/MainBanner';
import {PromoBanners} from '../../components/PromoBanners/PromoBanners';
import {MedicineStores} from '../../components/MedicineStores/MedicineStores';
import {AddPharmacyPromoSection} from '../../components/AddPharmacyPromoSection/AddPharmacyPromoSection';
import {ReviewsSection} from '../../components/ReviewsSection/ReviewsSection';
import { useDispatch, useSelector } from 'react-redux';
import { selectNearest } from "../../redux/selects";
import { useEffect } from "react";
import { fetchnearest } from "redux/operations";

export default function Home(){
  const stores=useSelector(selectNearest);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchnearest())
  }, [dispatch])
  
return (
    <ContainerHome>
       <ContainerMainBanner>
         <MainBanner/>
       </ContainerMainBanner>

       <PromoBanners/>

       <MedicineStores stores={stores} title={'Your Nearest Medicine Store'}/>

       <AddPharmacyPromoSection/>

       <ReviewsSection/>
       
    </ContainerHome>
)
}