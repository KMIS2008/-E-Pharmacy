import styled from "styled-components";

export const Container=styled.ul`
margin-bottom: ${p=>p.theme.spacing(10)};
display: flex;
justify-content: space-between;
list-style:none;
overflow-x: auto; 
white-space: nowrap; 
gap:30px;
;`

export const ContainerItem=styled.li`
display: flex;
align-items: center;
gap:10px;
flex-shrink: 0;

font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 1,29;
letter-spacing: -0.02em;
text-align: left;

@media (min-width: 768px) {
    font-size: 16px;
}
;`