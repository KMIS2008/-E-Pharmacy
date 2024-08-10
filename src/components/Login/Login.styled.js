import styled from "styled-components";

export const Button=styled.button`
margin-bottom: 20px;
width: 100%;
height:44px;
padding: 13px 139px;
border-radius: 60px;

background: #59B17A;
color: ${p=>p.theme.colors.white};

cursor: pointer;

&:hover{
    background: #3F945F;

}
`

export const Input=styled.input`
margin-bottom: ${p=>p.theme.spacing(1)};
width: 100%;
height: 44px;
border-radius: 60px;
background: #FFFFFF;
outline: none;

border: 1px solid #1D1E211A;

&::placeholder{
    padding-left: 20px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 1,5;
    color: #1D1E2166;
}
`

export const Navigate=styled.p`
font-family: Inter;
font-size: 12px;
font-weight: 400;
line-height: 1,5;
color: #1D1E2166;
text-align: center;
cursor: pointer;
`