import styled from "styled-components";

export const Container =styled.div`

padding: 0 20px;
opacity: 0px;
`
export const ContainerIn =styled.div`
margin-bottom: 32px;
padding:20px 20px;
border-radius: 32px;
background: ${p=>p.theme.colors.green};

@media (min-width: 798px) {
    padding:40px 20px;
}
@media (min-width: 1440px) {
    display: flex;
}
`

export const Title=styled.h1`
margin-bottom: ${p=>p.theme.spacing(2)};
font-family: Inter;
font-size: 28px;
font-weight: 600;
line-height: 1,14;
letter-spacing: -0.01em;
color: #F1F1F1;

@media (min-width: 798px) {
    font-size: 48px;
}
`

export const Discription=styled.p`
margin-bottom: ${p=>p.theme.spacing(4)};
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 1,29;
text-align: left;
color: #F1F1F1;

@media (min-width: 798px) {
    font-size: 16px;
}
`

export const Button=styled.button`
margin-bottom: ${p=>p.theme.spacing(4)};
width: 154px;
height: 44px;
padding: 13px 32px;
gap: 8px;
border-radius: 60px;
border: 1px solid #F1F1F180;

font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
text-align: center;
color: #F1F1F1;
cursor: pointer;

&:hover{
    background: #3F945F;
}

@media (min-width: 798px) {
    width: 190px;
    margin-bottom: ${p=>p.theme.spacing(6)};
}
`

export const Img = styled.img`
width: 100%;
@media (min-width: 1440px) {
    width: 600px;
}
`

export const ContainerFlex=styled.div`
@media (min-width: 1440px) {
    width: 50%;
   margin-right: 60px;
}
`
