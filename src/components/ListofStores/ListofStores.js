import sprite from '../../images/sprite.svg';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {Container, ContainerItem, ContainerTitle, ContainerRating, 
        Title, SvgRating, Text, TextStatus, SvgContact, ContainerConntact,
        TextContact, ImgTop, Img, ImgBottom, Button, ContainerButtonRating,
        ImgMedecineTop, ImgMedecine, ImgMedecineBottom} from './ListofStores.styled';
import Rectangle42212 from '../../images/Rectangle42212.png';
import Rectangle42213 from '../../images/Rectangle42213.png';
import Rectangle42214 from '../../images/Rectangle42214.png';
import RectangleTD42214 from '../../images/RectangleTD42214.png';
import RectangleTD42213 from '../../images/RectangleTD42213.png';
import RectangleTD42212 from '../../images/RectangleTD42212.png';
import RectangleMedicine42212 from '../../images/RectangleMedicine42212.png';
import RectangleMedicine42213 from '../../images/RectangleMedicine42213.png';
import RectangleMedicine42214 from '../../images/RectangleMedicine42214.png';

export const ListofStores = ({stores}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const shouldRenderButton = location.pathname === '/medicine-store' && !isMobile;
    const shouldRenderImages = location.pathname === '/home';
    const shouldRenderMedicineImages = location.pathname === '/medicine-store'&& isMobile;

    const handleNavigat=()=>{
        navigate('/medicine')
    }
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <Container >
            {stores.map(store => (
                <ContainerItem key={store._id}>
                    <ContainerTitle>
                      <Title>{store.name}</Title>

                      {!shouldRenderButton && (
                       <ContainerRating>
                        <SvgRating>
                          <use xlinkHref={sprite + '#icon-star'} />
                        </SvgRating>
                        <Text>{store.rating}</Text>                        
                      </ContainerRating>      
                          )}

                      {!shouldRenderButton && (
                      <TextStatus>Open</TextStatus>     
                          )}
                       
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

                   {shouldRenderImages && (
                        isMobile ? (
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
                        )
                    )}
                            <ContainerButtonRating>
                               {shouldRenderButton && (
                                  <Button type="button" onClick={handleNavigat}>Store</Button>
                                )}

                                {shouldRenderButton && (
                                   <ContainerRating>
                                      <SvgRating>
                                         <use xlinkHref={sprite + '#icon-star'} />
                                      </SvgRating>
                                      <Text>{store.rating}</Text>                        
                                    </ContainerRating> 
                                )}  

                                {shouldRenderButton && (
                                   <TextStatus>Open</TextStatus>     
                                )}

                            </ContainerButtonRating>

                            {shouldRenderMedicineImages&&(
                                <>
                                <ImgTop src={Rectangle42214} alt="Image Top" />
                                <Img src={Rectangle42213} alt="Image Middle" />
                                <ImgBottom src={Rectangle42212} alt="Image Bottom" />
                            </>
                            )}

                            {shouldRenderButton && (
                       
                            <>
                                <ImgMedecineTop src={RectangleMedicine42214} alt="Image Top" />
                                <ImgMedecine src={RectangleMedicine42213} alt="Image Middle" />
                                <ImgMedecineBottom src={RectangleMedicine42212} alt="Image Bottom" />
                            </>
                        )}

                </ContainerItem>
            ))}
        </Container>
    );
};