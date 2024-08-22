import { useEffect, useState } from 'react';
import {Container, ImgTop, Img, ImgBottom} from './RegisterPage.styled';
import { RegisterForm } from 'components/Register/Register';
import { Tittle } from 'components/Title/Title';
import Rectangle42212 from '../../images/Rectangle42212.png';
import Rectangle42213 from '../../images/Rectangle42213.png';
import Rectangle42214 from '../../images/Rectangle42214.png';
import RectangleDT42212 from '../../images/RectangleDT42212.png';
import RectangleDT42213 from '../../images/RectangleDT42213.png';
import RectangleDT42214 from '../../images/RectangleDT42214.png';


export default function RegisterPage(){
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

    return(
        <Container>
          <Tittle/>
          <RegisterForm/>

          {isMobile ? (
                            <>
                                <ImgTop src={Rectangle42214} alt="Image Top" />
                                <Img src={Rectangle42213} alt="Image Middle" />
                                <ImgBottom src={Rectangle42212} alt="Image Bottom" />
                            </>
                        ) : (
                            <>
                                <ImgTop src={RectangleDT42214} alt="Image Top" />
                                <Img src={RectangleDT42213} alt="Image Middle" />
                                <ImgBottom src={RectangleDT42212} alt="Image Bottom" />
                            </>
                        )}
        </Container>
    )
}
