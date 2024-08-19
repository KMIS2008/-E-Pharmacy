import {MedicineStores} from '../../components/MedicineStores/MedicineStores';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectStores } from "../../redux/selects";
import { fetchstores } from "redux/operations";


export default function MedicineStorePage(){
    const stores=useSelector(selectStores);
    const dispatch=useDispatch();
  
    useEffect(()=>{
      dispatch(fetchstores())
    }, [dispatch])

    return(
        <>
            <MedicineStores stores={stores} title={'Medicine store'}/>
        </>
    )
}
