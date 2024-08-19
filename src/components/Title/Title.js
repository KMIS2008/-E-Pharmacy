import {Container, Title, Span, Img} from './Title.styled';
import drugMobileLogin1 from '../../images/drugMobileLogin1.png';
import drugMobileLogin2 from '../../images/drugMobileLogin2.png';
import drugMobileLogin3 from '../../images/drugMobileLogin3.png';
import drugTabletLogin1 from '../../images/drugTabletLogin1.png';
import drugTabletLogin2 from '../../images/drugTabletLogin2.png';
import drugTabletLogin3 from '../../images/drugTabletLogin3.png';
import drugDesctopLogin1 from '../../images/drugDesctopLogin1.png';
import drugDesctopLogin2 from '../../images/drugDesctopLogin2.png';
import drugDesctopLogin3 from '../../images/drugDesctopLogin3.png';


export const Tittle=()=>{
    return(
        <Container>
            <Title> Your medication, 
                <span> 
                 <picture>
            <source
            media="(min-width: 1440px)"
            srcSet={`
                ${drugDesctopLogin1} 1x,
                ${drugDesctopLogin2} 2x,
                ${drugDesctopLogin3} 3x
                `}
            />
            <source
            media="(min-width: 768px)"
            srcSet={`
                ${drugTabletLogin1} 1x,
                ${drugTabletLogin2} 2x,
                ${drugTabletLogin3} 3x
                `}
            />
            <source
             media="(min-width: 375px)"
             srcSet={`
               ${drugMobileLogin1} 1x,
               ${drugMobileLogin2} 2x,
               ${drugMobileLogin3} 3x
               `}
            />
            <source
             media="(min-width: 320px)"
             srcSet={`
               ${drugMobileLogin1} 1x,
               ${drugMobileLogin2} 2x,
               ${drugMobileLogin3} 3x
               `}
            />
            <Img alt="drug"
                src={drugMobileLogin1} 
                srcSet={`
                ${drugMobileLogin1} 1x,
                ${drugMobileLogin2} 2x,
                ${drugMobileLogin3} 3x
                      `}
               />

          </picture>
                
                </span>
                </Title>
                
                <Title> delivered Say goodbye to all <Span>your healthcare </Span> worries with us </Title>

        </Container>
    )
}