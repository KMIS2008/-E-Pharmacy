import GirlMobile1 from '../../images/GirlMobile1.png';
import GirlMobile2 from '../../images/GirlMobile2.png';
import GirlMobile3 from '../../images/GirlMobile3.png';
import GirlTablet1 from '../../images/GirlTablet1.png';
import GirlTablet2 from '../../images/GirlTablet2.png';
import GirlTablet3 from '../../images/GirlTablet3.png';
import GirlDesctop1 from '../../images/GirlDesctop1.png';
import GirlDesctop2 from '../../images/GirlDesctop2.png';
import GirlDesctop3 from '../../images/GirlDesctop3.png';
import {Container, ContainerIn, Title, Discription, Button, Img, ContainerFlex} from './AddPharmacyPromoSection.styled';
import {FeaturesSection} from '../../components/FeaturesSection/FeaturesSection';
import { useNavigate } from 'react-router-dom';

export const AddPharmacyPromoSection=()=>{
  const navigator = useNavigate(); 
  const handleHomeMedicineStore = () => {
    navigator('/medicine-store');     
};
    return(
        <Container>
          <ContainerIn>
            <ContainerFlex>
            <Title>Add the medicines you need online now</Title>
            <Discription>Enjoy the convenience of having your 
              prescriptions filled from home by connecting with your community 
              pharmacy through our online platform.</Discription>

            <Button type="button" onClick={handleHomeMedicineStore}>Buy medicine</Button>                
            </ContainerFlex>


            <picture>
            <source
            media="(min-width: 1440px)"
            srcSet={`
                ${GirlDesctop1} 1x,
                ${GirlDesctop2} 2x,
                ${GirlDesctop3} 3x
                `}
            />
            <source
            media="(min-width: 768px)"
            srcSet={`
                ${GirlTablet1} 1x,
                ${GirlTablet2} 2x,
                ${GirlTablet3} 3x
                `}
            />
            <source
             media="(min-width: 375px)"
             srcSet={`
               ${GirlMobile1} 1x,
               ${GirlMobile2} 2x,
               ${GirlMobile3} 3x
               `}
            />
            <source
             media="(min-width: 320px)"
             srcSet={`
               ${GirlMobile1} 1x,
               ${GirlMobile2} 2x,
               ${GirlMobile3} 3x
               `}
            />
            <Img alt="dog"
                src={GirlMobile1} 
                srcSet={`
                ${GirlMobile1} 1x,
                ${GirlMobile2} 2x,
                ${GirlMobile3} 3x
                      `}
               />
          </picture>

            </ContainerIn>

            <FeaturesSection/>

        </Container>
    )
}