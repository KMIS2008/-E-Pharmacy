import styled from "styled-components";

export const Container=styled.div`
position: relative;
padding-top: 50px;
margin-bottom: 20px;

@media (min-width: 768px) {
    padding-top: 100px;
    margin-bottom: 50px;
    width: 614px;
}
`

export const Title=styled.h1`

font-family: Inter;
font-size: 28px;
font-weight: 600;
line-height: 1,21;
color: #1D1E21;

@media (min-width: 768px) {
    font-size: 54px;
}
`

export const Span=styled.span`
color: ${p=>p.theme.colors.green};

@media (min-width: 768px) {
    font-size: 54px;
}
`

export const Img=styled.img`
position: absolute;
top:-10px;
left: 200px;

width: 95px;
height: 93px;

@media (min-width: 768px) {
    width: 179px;
    height: 175px;
    top: -20px;
    left: 400px;
}
`