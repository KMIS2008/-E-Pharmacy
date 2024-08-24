import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container=styled.div`
display: flex;
flex-direction:  ${p=>p.$stylefooter||p.$styledisplay?"none":'column'}; 
gap: ${p=>p.theme.spacing(2)};
`

export const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 60px;
  opacity: 0px;
  background: ${p => (p.$stylefooter ? "none" : "white")};
  background: ${p => p.$isHeader && "white"};
  border: 4px solid transparent; 
  box-sizing: border-box; 
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  color: ${p => (p.$stylefooter ? "white" : "#93939A")};
  color: ${p => p.$isHeader && "#93939A"};

  cursor: pointer;
  transition: background 0.3s, color 0.3s, border 0.3s;

  &:hover {
    background: ${p => p.theme.colors.green};
    color: ${p => p.theme.colors.white};
    border: 4px solid ${p => p.theme.colors.white}; 
   text-decoration: underline;
  }

  &:active {
    background: ${p => p.theme.colors.green};
    color: ${p => p.theme.colors.white};
    border: 4px solid ${p => p.theme.colors.white}; /* Изменяем цвет границы */
  }
`;