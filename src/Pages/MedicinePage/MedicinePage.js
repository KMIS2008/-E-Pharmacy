import {HeaderStores} from '../../components/HeaderStores/HeaderStores';
import {FilterForm}from '../../components/FilterForm/FilterForm';
import {Products} from '../../components/Products/Products';
import {Pagination} from '../../components/Pagination/Pagination';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "redux/selects";
import { fetchproducts} from "redux/operations";

export default function MedicinePage(){
  const dispatch=useDispatch();
  const [isPageNumber, setIsPageNumber] = useState(1);
  const products = useSelector(selectProducts);

  const handleChangeNewPage=(number)=>{
    setIsPageNumber(number);
}

useEffect(()=>{
  dispatch(fetchproducts(isPageNumber))
}, [dispatch, isPageNumber])

    return(
        <>
          <HeaderStores title={'Medicine'}/>
          <FilterForm/>
          <Products products={products}/>
          <Pagination handleChangeNewPage={handleChangeNewPage} currentPage={isPageNumber}/>
        </>
    )
}