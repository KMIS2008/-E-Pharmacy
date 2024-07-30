import { useState } from 'react';
import { useSelector } from 'react-redux';
import {Container, Button, Span, TextAbout, Text, ContainerDiscription, ContainerReveiws,
    Img, TextName, TextTime, TextRating, TextReview, ContainerReviewsInfo, ContainerRating,
    ContainerList
} from './TabsContainer.styled';
import {selectIdProducts} from '../../redux/selects';
import { nanoid } from 'nanoid';
import sprite from '../../images/sprite.svg';
import { useMediaQuery } from 'react-responsive';


export const TabsContainer=()=>{
    const [isDiscription, setDiscription]=useState(false);
    const [isReviews, setReviews]=useState(false);
    const product=useSelector(selectIdProducts);
    const {discription, reviews}=product;
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    if (!product) {
        return <div>Loading...</div>; // или другой индикатор загрузки
    }

    const handleDiscription=()=>{
        setDiscription(true);
        setReviews(false)
    }

    const handleReviews=()=>{
        setReviews(true);
        setDiscription(false);
    }
    return(
        <div>
          <Container>
              <Button type="button" onClick={handleDiscription}>Description</Button>
            
              <Button type="button" onClick={handleReviews}>Reviews</Button>
            
          </Container>   

          {isDiscription&&(<ContainerDiscription>
          <TextAbout>{discription.about}</TextAbout>
          <Text><Span>Medicinal Uses: Antioxidant Properties: </Span>{discription.MedicinalUses}</Text>
          <Text><Span>Anti-Diabetic Effects: </Span>{discription.AntiDiabeticEffects}</Text>
          <Text><Span>Heart Health: </Span>{discription.HeartHealth}</Text>
          <Text><Span>Anti-Cancer Properties: </Span>{discription.AntiCancerProperties}</Text>
          <Text><Span>ImmuneSupport: </Span>{discription.ImmuneSupport}</Text>
          <Text><Span>DigestiveAid: </Span>{discription.DigestiveAid}</Text>
          </ContainerDiscription>
            )}  

          {isReviews&&(<ContainerReveiws>
            {reviews.map(review=>(
                <ContainerList key={nanoid()}>
                    <ContainerReviewsInfo>
                        <Img src={review.photo} alt='avatar'/>
                        <div>
                            <TextName>{review.name}</TextName>
                            <TextTime>{review.time}</TextTime>                            
                        </div>
                        <ContainerRating>
                        {isMobile ? (
                                        <svg width={16} height={16}>
                                            <use xlinkHref={sprite + '#icon-star'} />
                                        </svg>
                                    ) : (
                                        Array.from({ length: review.rating }, (_, i) => (
                                            <svg key={i} width={16} height={16}>
                                                <use xlinkHref={sprite + '#icon-star'} />
                                            </svg>
                                        ))
                                    )}
                            <TextRating>{review.rating}</TextRating>
                        </ContainerRating>
                    </ContainerReviewsInfo>
                    <TextReview>{review.review}</TextReview>
                </ContainerList>
            ))
            }
            </ContainerReveiws>)}
        </div>

    )
}