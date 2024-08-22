import { useEffect } from 'react';
import {Title, Text, Img, Name, Testimonial, ContainerList, ContainerItem} from './ReviewsSection.styled';
import { useDispatch, useSelector } from 'react-redux';
import {selectReviews} from '../../redux/selects';
import {fetchreviews} from '../../redux/operations';


export const ReviewsSection=()=>{
    const reviews = useSelector(selectReviews);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchreviews())
      }, [dispatch])

    return(
        <>
        <Title>Reviews</Title>
        <Text>Search for Medicine, Filter by your location</Text>
        <ContainerList>
           {reviews?.map(review=>(
                <ContainerItem key={review._id}>
                    <Img 
                   src={`https://robohash.org/${review.name}`} 
                    alt='avatar' 
                    width={64} 
                    height={64}/>
                    <Name>{review.name}</Name>
                    <Testimonial>{review.testimonial}</Testimonial>
                </ContainerItem>
            ))}
        </ContainerList>
        </>
    )
}