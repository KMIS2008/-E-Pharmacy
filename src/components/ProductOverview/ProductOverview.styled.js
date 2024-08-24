import styled from "styled-components"

export const Container=styled.div`
padding: 20px;

@media (min-width: 768px) {
    padding: 0 30px;
    display: flex;
    gap:10px;
}

@media (min-width: 1440px) {
    padding: 20px;
    display: block;
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

@media (min-width: 768px) {
    width: 364px;
    height: 284px;
}

@media (min-width: 1440px) {
    height: 337px;
}
`

export const ContainerInfo=styled.div`

@media (min-width: 768px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:10px;
}

@media (min-width: 1440px) {
    padding: 20px;
    display: block;
}
`

export const ContainerTitle=styled.div`
padding: 20px 20px 0 20px;
margin-bottom:  ${p=>p.theme.spacing(2)};
display: flex;
justify-content: space-between;
align-items: start;

@media (min-width: 768px) {
    display: block;
}

@media (min-width: 1440px) {
    display: flex;
justify-content: space-between;
align-items: start;
}
`

export const Title=styled.h5`
font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 1,4;
color: #1D1E21;

@media (min-width: 768px) {
font-size: 20px;
}
`
export const Text=styled.p`
font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 1,4;
color: #1D1E21;

@media (min-width: 768px) {
font-size: 20px;
}
`

export const TextBrand=styled.p`
padding-left: ${p=>p.theme.spacing(4)};
margin-bottom: ${p=>p.theme.spacing(4)};
font-family: Inter;
font-size: 12px;
font-weight: 400;
line-height: 1,5;
text-align: left;
color: #1D1E2199;
`

export const ContainerСounter=styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:5px;
height: 44px;
width: 108px;
border-radius: 30px;
border: 1px solid #59B17A99;
`

export const Сounter=styled.button`
font-size: 20px;
color: #59B17A;

cursor: pointer;

&:hover{
   color:#3F945F;
}
`

export const CounterNumber=styled.p`
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 1,25;
text-align: center;
color: #1D1E21;
`

export const ContainerButtons=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap:5px;

cursor: pointer;

@media (min-width: 768px) {
    padding-bottom: 20px;
}
`

export const Button=styled.button`
width: 140px;
height: 44px;
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

cursor: pointer;

color: ${p=>p.theme.colors.white};

&:hover{
    background: #3F945F;
}
`

