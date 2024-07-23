import styled from "styled-components";

export const Title=styled.h2`
margin-bottom: 10px;
font-family: Inter;
font-size: 28px;
font-weight: 600;
line-height: 1,14;
text-align: center;
color: #1D1E21;

@media (min-width: 768px) {
    font-size: 40px;
}
`

export const Text=styled.p`
margin-bottom: 40px;
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 1,14;
text-align: center;
color: #93939A;

@media (min-width: 768px) {
    font-size: 16px;
}
`

export const Img=styled.img`
margin: 0 auto;
margin-bottom: 10px;
width: 64px;
height: 64px;
border-radius: 50px;
background: ${p=>p.theme.colors.green}
`

export const ContainerList=styled.ul`
margin-bottom: 60px;
padding-left: 40px;
padding-right: 40px;
list-style: none;

@media (min-width:768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}
@media (min-width:1440px) {
    grid-template-columns: repeat(3, 1fr);
}
`

export const ContainerItem=styled.li`
margin-bottom: 40px;
`

export const Name=styled.p`
margin-bottom: 10px;
font-family: Inter;
font-size: 20px;
font-weight: 600;
line-height: 1,5;
text-align: center;
color: #1D1E21;
`

export const Testimonial=styled.p`
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 1,25;
text-align: center;
color: #93939A;
`