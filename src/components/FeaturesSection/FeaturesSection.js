import sprite from '../../images/sprite.svg';
import {Container, ContainerItem} from './FeaturesSection.styled';
import { nanoid } from 'nanoid';

const features=[
    "Take user orders form online",
    "Create your shop profile",
    "Manage your store",
    "Get more orders",
    "Storage shed"
]


export const FeaturesSection=()=>{
    return(
        <Container>
            {features.map((feature) => (
                <ContainerItem key={nanoid()}>
                    <svg width={20} height={20}>
                        <use xlinkHref={sprite + '#icon-lightning-01'} />
                    </svg>
                    <p>{feature}</p>
                </ContainerItem>
            ))}
        </Container>
    )
}