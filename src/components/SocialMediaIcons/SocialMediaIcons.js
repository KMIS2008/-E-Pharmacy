import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import { List} from './SocialMediaIcons.styled';

export const SocialMediaIcons=()=>{
   
        const [hoveredIcon, setHoveredIcon] = useState(null);
      
        const handleMouseEnter = (icon) => {
          setHoveredIcon(icon);
        };
      
        const handleMouseLeave = () => {
          setHoveredIcon(null);
        };
    
    return(
          <List>
              <li>
                  <a 
                  href="https://www.facebook.com/goITclub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => handleMouseEnter('facebook')}
                  onMouseLeave={handleMouseLeave}
                  >
                       <svg width={44} height={44}>
                           <use xlinkHref={sprite + (hoveredIcon === 'facebook' ? '#icon-facebook-hover' : '#icon-facebook')} />
                       </svg>
                   </a>   
              </li>
              <li>
                   <a 
                   href="https://www.instagram.com/goitclub/"
                   target="_blank"
                   rel="noopener noreferrer"
                   onMouseEnter={() => handleMouseEnter('instagram')}
                   onMouseLeave={handleMouseLeave}
                  >
                      <svg width={44} height={44}>
                      <use xlinkHref={sprite + (hoveredIcon === 'instagram' ? '#icon-instagram-hover' : '#icon-instagram')} />
                       </svg>
                    </a>
              </li>
              <li>
                    <a 
                              href="https://www.youtube.com/c/GoIT"
                              target="_blank"
                              rel="noopener noreferrer"
                              onMouseEnter={() => handleMouseEnter('youtube')}
                              onMouseLeave={handleMouseLeave}
                    >
                      <svg width={44} height={44}>
                      <use xlinkHref={sprite + (hoveredIcon === 'youtube' ? '#icon-youtube-hover' : '#icon-youtube')} />
                      </svg>
                    </a>
              </li>
          </List>    
    )}

