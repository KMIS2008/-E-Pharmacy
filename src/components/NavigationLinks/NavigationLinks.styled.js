import styled from "styled-components";

export const Button=styled.button`
padding: 10px 18px;
border-radius: 60px;
opacity: 0px;
background: #D9D9D9;

font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 1;
text-align: center;
color: #93939A;

&:hover{
    background: ${p=>p.theme.colors.green};
    color: ${p=>p.theme.colors.white};
    border: 4px solid  #D9D9D9;

}
`