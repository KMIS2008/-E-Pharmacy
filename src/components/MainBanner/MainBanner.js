import   DrugMobile1 from '../../images/DrugMobile1.png';
import   DrugMobile2 from '../../images/DrugMobile2.png';
import   DrugMobile3 from '../../images/DrugMobile3.png';
import   DrugTablate1 from '../../images/DrugTablet1.png';
import   DrugTablate2 from '../../images/DrugTablet2.png';
import   DrugTablate3 from '../../images/DrugTablet3.png';
import   DrugDesctop1 from '../../images/DrugDesctop1.png';
import   DrugDesctop2 from '../../images/DrugDesctop2.png';
import   DrugDesctop3 from '../../images/DrugDesctop3.png';
import {Img} from './MainBanner.styled';
import {PromoContent} from '../PromoContent/PromoContent';

export const MainBanner=()=>{
    return(
        <>
         <picture>
            <source
            media="(min-width: 1440px)"
            srcSet={`
                ${DrugDesctop1} 1x,
                ${DrugDesctop2} 2x,
                ${DrugDesctop3} 3x
                `}
            />
            <source
            media="(min-width: 768px)"
            srcSet={`
                ${DrugTablate1} 1x,
                ${DrugTablate2} 2x,
                ${DrugTablate3} 3x
                `}
            />
            <source
             media="(min-width: 375px)"
             srcSet={`
               ${DrugMobile1} 1x,
               ${DrugMobile2} 2x,
               ${DrugMobile3} 3x
               `}
            />
            <source
             media="(min-width: 320px)"
             srcSet={`
               ${DrugMobile1} 1x,
               ${DrugMobile2} 2x,
               ${DrugMobile3} 3x
               `}
            />
            <Img alt="dog"
                src={DrugMobile1} 
                srcSet={`
                ${DrugMobile1} 1x,
                ${DrugMobile2} 2x,
                ${DrugMobile3} 3x
                      `}
               />
          </picture>

          <PromoContent/>
        
        </>
    )
}