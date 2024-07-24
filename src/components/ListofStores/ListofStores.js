import sprite from '../../images/sprite.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNearest } from "redux/selects";
import { fetchnearest } from "redux/operations";
import {Container, ContainerItem, ContainerTitle, ContainerRating, 
        Title, SvgRating, Text, TextStatus, SvgContact, ContainerConntact,
        TextContact, ImgTop, Img, ImgBottom} from './ListofStores.styled';
import Rectangle42212 from '../../images/Rectangle42212.png';
import Rectangle42213 from '../../images/Rectangle42213.png';
import Rectangle42214 from '../../images/Rectangle42214.png';
import RectangleTD42214 from '../../images/RectangleTD42214.png';
import RectangleTD42213 from '../../images/RectangleTD42213.png';
import RectangleTD42212 from '../../images/RectangleTD42212.png';

export const ListofStores = () => {
    const stores=useSelector(selectNearest);
    const dispatch=useDispatch();

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
                    {isMobile ? (
                                 <>
                                 <ImgTop src={Rectangle42214} alt="Image Top" />
                                 <Img src={Rectangle42213} alt="Image Middle" />
                                 <ImgBottom src={Rectangle42212} alt="Image Bottom" />
                                 </>
                            ) : (
                                <>
                                  <ImgTop src={RectangleTD42214} alt="Image Top" />
                                  <Img src={RectangleTD42213} alt="Image Middle" />
                                  <ImgBottom src={RectangleTD42212} alt="Image Bottom" />
                                </>
                            )}

                </ContainerItem>
            ))}
        </Container>
    );
};