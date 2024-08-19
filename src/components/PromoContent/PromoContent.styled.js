import styled from "styled-components";

export const Container=styled.div`
position: absolute;
`

export const Title=styled.h1`
width: 293px;
margin-bottom: ${p=>p.theme.spacing(2)};
font-family: Inter;
font-size: 50px;
font-weight: 600;
line-height: 1;

text-shadow: 0px 4px 85px 0px #1D1E214D;
color: ${p=>p.theme.colors.white};

@media (min-width768px) {
    width: 609px;
    font-size: 74px;
}
`

export const Text=styled.p`
width: 156px;
margin-left: auto;
margin-right: 0;
font-family: Inter;
font-size: 12px;
font-weight: 400;
line-height: 1,33;

color: ${p=>p.theme.colors.white};

@media (min-width768px) {
    width: 207px;
    font-size: 16px;
}
`