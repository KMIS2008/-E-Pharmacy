import styled from "styled-components";

export const Container = styled.div`
position: relative;
padding-top: 40px;
`

export const SvgButton = styled.div`
display: block;
position:absolute;
right: 0; top: 0;
border: none;
margin-left: auto;

cursor: pointer;
&:hover{
    background: #3F945F;
}
`

export const Title =styled.h1`
margin-bottom: ${p=>p.theme.spacing(2)};
font-family: Inter;
font-size: 28px;
font-weight: 600;
line-height: 1,43;
text-align: center;
color: #1D1E21;
`

export const Text=styled.p`
margin-bottom: ${p=>p.theme.spacing(4)};
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 1,29;
text-align: center;
color: #6A6A6F;
`