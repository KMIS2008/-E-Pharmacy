import {Title, Text} from './HeaderStores.styled';
import { useLocation } from 'react-router-dom';

export const HeaderStores=({title})=>{
  const location = useLocation();

    return(
        <>
          <Title>{title}</Title>
          {location.pathname === '/home' && <Text>Search for Medicine, Filter by your location</Text>}
        </>
    )
}