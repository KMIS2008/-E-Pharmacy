import styled from "styled-components";

export const Container=styled.ul`
padding: 20px;
list-style: none;

@media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${p=>p.theme.spacing(2)}
}

@media (min-width: 1440px) {
    display: grid;
grid-template-columns: repeat(4, 1fr);
}
`

export const Img=styled.img`
padding: 14px 18px 14px 18px;
margin-bottom: ${p=>p.theme.spacing(4)};
gap: 14px;
border-radius: 20px;
opacity: 0px;
background: #F7F7F7;
border: 1.15px solid #59B17A99;

width: 335px;
height: 300px;

@media (min-width: 768px) {
   min-width: 226px;
    min-height: 260px;
}

@media (min-width: 1440px) {
   min-width: 280px;
    min-height: 280px;
}
`

export const ContainerTitle=styled.div`
padding: ${p=>p.theme.spacing(4)};
margin-bottom:  ${p=>p.theme.spacing(4)};
display: flex;
justify-content: space-between;
align-items: center;
`

export const Title=styled.h5`
font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 1,4;
color: #1D1E21;
`
export const Text=styled.p`
font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 1,4;
color: #1D1E21;
`

export const Button=styled.button`
width: 108px;
height: 34px;
padding: 10px 16px 10px 16px;
gap: 10px;
border-radius: 24px;
opacity: 0px;
background: ${p=>p.theme.colors.green};

font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 1;
text-align: center;

color: ${p=>p.theme.colors.white};
cursor: pointer;

&:hover{
    background: #3F945F;
}
`
export const ButtonDetails=styled.button`
font-family: Inter;
font-size: 12px;
font-weight: 400;
line-height: 1,5;
text-align: center;

color: #1D1E21;
text-decoration: underline;

cursor: pointer;

&:hover{
    color: #3F945F;
}
`