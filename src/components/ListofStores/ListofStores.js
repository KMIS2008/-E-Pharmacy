import sprite from '../../images/sprite.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNearest } from "redux/selects";
import { fetchnearest } from "redux/operations";
import {Container, ContainerItem, ContainerTitle, ContainerRating, 
        Title, SvgRating, Text, TextStatus, SvgContact, ContainerConntact,
        TextContact} from './ListofStores.styled';

export const ListofStores = () => {
    const stores=useSelector(selectNearest);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchnearest())
      }, [dispatch])

    return (
        <Container>
            {stores.map(store => (
                <ContainerItem key={store._id}>
                    <ContainerTitle>
                      <Title>{store.name}</Title>
                      <ContainerRating>
                        <SvgRating>
                          <use xlinkHref={sprite + '#icon-star'} />
                        </SvgRating>
                        <Text>{store.rating}</Text>                        
                      </ContainerRating>

                      <TextStatus>Open</TextStatus>                        
                    </ContainerTitle>
                    
                    <ContainerConntact>
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`} target="_blank" rel="noreferrer noopener">
                        <SvgContact>
                            <use xlinkHref={sprite + '#icon-map-pin'} />
                        </SvgContact>
                      </a>
                      <TextContact>{store.address}{store.city}</TextContact>                        
                    </ContainerConntact>

                    <ContainerConntact>
                      <a href={`tel:${store.phone}`} target="_blank" rel="noreferrer noopener">
                        <SvgContact>
                            <use xlinkHref={sprite + '#icon-phone'} />
                        </SvgContact>
                      </a>
                      <TextContact>{store.phone}</TextContact>                        
                    </ContainerConntact>

                </ContainerItem>
            ))}
        </Container>
    );
};