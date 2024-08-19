import {HeaderStores} from '../HeaderStores/HeaderStores';
import {ListofStores} from '../ListofStores/ListofStores';


export const MedicineStores=({title, stores})=>{
    return(
        <>
          <HeaderStores title={title}/>
          <ListofStores stores={stores}/>
        </>
    )
}