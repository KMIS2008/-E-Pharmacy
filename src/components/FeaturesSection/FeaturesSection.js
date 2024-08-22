import sprite from '../../images/sprite.svg';
import {Container, ContainerItem} from './FeaturesSection.styled';


export const FeaturesSection=()=>{
    return(
        <Container>
            <ContainerItem>
                <svg width={20} height={20}>
                <use xlinkHref={sprite + '#icon-lightning-01'}/>
                </svg>
                <p>Take user orders form online</p>
            </ContainerItem>
            <ContainerItem>
                <svg width={20} height={20}>
                <use xlinkHref={sprite + '#icon-lightning-01'}/>
                </svg>
                <p>Create your shop profile</p>
            </ContainerItem>
            <ContainerItem>
                <svg width={20} height={20}>
                <use xlinkHref={sprite + '#icon-lightning-01'}/>
                </svg>
                <p>Manage your store</p>
            </ContainerItem>
            <ContainerItem>
                <svg width={20} height={20}>
                <use xlinkHref={sprite + '#icon-lightning-01'}/>
                </svg>
                <p>Get more orders</p>
            </ContainerItem>
            <ContainerItem>
                <svg width={20} height={20}>
                <use xlinkHref={sprite + '#icon-lightning-01'}/>
                </svg>
                <p>Storage shed</p>
            </ContainerItem>
        </Container>
    )
}