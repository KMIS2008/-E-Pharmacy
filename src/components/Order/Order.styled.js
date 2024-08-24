import styled from "styled-components";

export const ContainerList=styled.ul`
list-style: none;
padding-left: ${p=>p.theme.spacing(4)};
margin-top: 80px;
margin-bottom: 60px;
`

export const ContainerItem=styled.div`
display: flex;
gap: 14px;
`

export const ContainerInfo=styled.div`
width: 100%;
`
export const ContainerTitle=styled.div`
@media (min-width: 768px) {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
`

export const Img=styled.img`
width:120px;
height:120px;
border-radius: 27px;
opacity: 0px;
border: 1.15px solid #F1F1F1;
background: #F1F1F1;

@media (min-width: 768px) {
    width:122px;
    height:133px;
}
`

export const ContainerСounter=styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:5px;
height: 32px;
width: 95px;
border-radius: 30px;
border: 1px solid #59B17A99;

@media (min-width: 768px) {
    height: 44px;
    width: 108px;
}
`

export const Сounter=styled.button`
font-size: 18px;
color: #59B17A;

@media (min-width: 768px) {
    font-size: 20px;
}
`

export const CounterNumber=styled.p`
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 1,25;
text-align: center;
color: #1D1E21;

@media (min-width: 768px) {
    font-size: 16px;
}
`

export const ButtonRemove=styled.button`
font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 1,21;
letter-spacing: -0.05em;
text-align: center;

width: 89px;
height: 32px;
padding: 8px 12px;
border-radius: 40px;
opacity: 0px;

background: #E850501A;
color: #E85050;

cursor: pointer;
&:hover{
    background: #3F945F;
}
`

export const ContainerButton=styled.div`
display: flex;
align-items: center;
gap: 10px;

@media (min-width: 768px) {
    justify-content: space-between;

}
`

export const Title=styled.p`
margin-bottom: 5px;
font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 1,4;
color: #1D1E21;

@media (min-width: 768px) {
    font-size: 18px;
}
`

export const Text=styled.p`
margin-bottom: 5px;
font-family: Inter;
font-size: 12px;
font-weight: 400;
line-height: 1,17;
color: #6A6A6F;

@media (min-width: 768px) {
    font-size: 14px;
}
`

export const Price=styled.p`
margin-bottom: 20px;
font-family: Inter;
font-size: 12px;
font-weight: 500;
line-height: 1,17;
color: #1D1E21;
`

export const Line=styled.div`
border: 1px solid #1D1E211A;
margin: 20px 0;
`