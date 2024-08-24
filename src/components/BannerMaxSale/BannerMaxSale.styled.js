import styled from "styled-components";

export const ContainerList=styled.li`
margin-bottom: 28px;
background: #FDFDFD;
border-radius: 27px;
padding: 14px 18px 14px 18px;
border: 1.15px solid #F1F1F1;
box-shadow: 0px -1px 13.86px 0px #1D1E2105;

@media (min-width: 768px) {
    margin-bottom: 0;
}
`

export const Numbert=styled.div`
padding: 10px 0;
width: 54px;
height: 54px;
border-radius: 50%;
background: #E7F1ED66;

font-size: 28px;
color: #59B17A;
text-align: center;

@media (min-width: 768px) {
    padding: 16px 0;
    width: 74px;
    height: 74px;
}
`
export const Text=styled.p`
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 1,4;
color: #252539;

@media (min-width: 768px) {
font-size: 20px;
}
`

export const TextRaite=styled.p`
margin-right: ${p=>p.theme.spacing(2)};
font-family: Inter;
font-size: 24px;
font-weight: 500;
line-height: 1,4;

color: #252539;

@media (min-width: 768px) {
font-size: 36px;
}
`
export const Button=styled.button`
font-family: Inter;
font-size: 13px;
font-weight: 400;
line-height: 1,4;

color: #93939A;
cursor: pointer;

&:hover{
    text-decoration: underline;
}
`

export const ContainerBanner=styled.div`
margin-bottom: ${p=>p.theme.spacing(2)};
display: flex;
align-items: center;
gap:${p=>p.theme.spacing(2)}
`

export const ContainerSale=styled.div`
display: flex;
align-items: center;
gap:${p=>p.theme.spacing(2)}
`
