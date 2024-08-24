import styled from "styled-components";

export const Container=styled.div`
display: flex;
flex-direction: column;
gap: ${p=>p.theme.spacing(2)};

@media (min-width: 768px) {
 flex-direction: row;
}
`

export const Button=styled.button`
padding: 13px 32px;
border-radius: 60px;
opacity: 0px;
border: 1px solid #F1F1F180;

background: ${p=>p.theme.colors.green};

font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 1;
text-align: center;
color: #F1F1F1;
cursor: pointer;

&:hover{
    border: 1px solid transparent;
    text-decoration: underline ;
}
`