import { useState } from "react";
import { useDispatch} from "react-redux";
import {fetchProductsKeyword} from '../../redux/operations';
import {ContainerInput,Svg, Input } from './SearchInput.styled';
import sprite from '../../images/sprite.svg';


export const SearchInput=()=>{
    const [searchValue, setSearchValue] = useState("");

    const dispatch=useDispatch();

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleResetClick = () => {
        setSearchValue('');
    };

    const handleSearch=(evt)=>{
        evt.preventDefault();
        dispatch(fetchProductsKeyword({ keyword: searchValue, pageNumber:1}));
        
        handleResetClick()
    }

    return<>
    
    <ContainerInput>
                <Input
                    name='name'
                    type='text'
                    value={searchValue}
                    onChange={handleInputChange}
                    placeholder="Search medicine"
                />
                     <button type='submit'>
                     <Svg width={16} height={16} onClick = {handleSearch}>
                          <use xlinkHref={sprite + '#icon-search'}/>
                     </Svg>
                     </button>

    </ContainerInput>
    </>
}