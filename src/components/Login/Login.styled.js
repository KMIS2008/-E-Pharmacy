import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container=styled.form`
margin-bottom: ${p=>p.$isModal? '0':'200px'};
@media (min-width: 1440px) {
    width: ${(p) => (p.$isModal ? '100%' : '323px')};
    padding-top: ${(p) => (p.$isModal ? '0' : '90px')};
}
`

export const Button=styled.button`
display: flex;
align-items: center;
justify-content: center;
margin-top: 98px;
margin-bottom: 20px;
width: 100%;
height:44px;
border-radius: 60px;

background: #59B17A;
color: ${p=>p.theme.colors.white};
text-align: center;

cursor: pointer;

&:hover{
    background: #3F945F;
}

@media (min-width: 768px) {
    margin-top: 58px;
    width: 323px;
}
`

export const Input=styled.input`
margin-bottom: ${p=>p.theme.spacing(2)};
padding-left: ${p=>p.theme.spacing(4)};
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
export const Navigate=styled(NavLink)`
font-family: Inter;
font-size: 12px;
font-weight: 400;
line-height: 1,5;
color: #1D1E2166;
text-align: center;
cursor: pointer;

&:hover{
    text-decoration: underline;
}
`

export const ContainerInput=styled.div`
@media (min-width: 768px) {
    width: ${(p) => (p.$isModal ? '100%' : '323px')};
}
`

export const ContainerNavigate=styled.div`
text-align: center;
@media (min-width: 768px) {
    width: 323px;
}
`