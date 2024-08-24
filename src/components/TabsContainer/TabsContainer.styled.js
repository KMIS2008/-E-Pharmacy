import styled from "styled-components";

export const Container =styled.div`
display: flex;
align-items: center;
justify-content: left;
gap:${p=>p.theme.spacing(1)};
padding: 40px;
`

export const Button=styled.button`
width: 120px;
height: 33px;

font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 1,21;
letter-spacing: -0.05em;
text-align: center;
color: #59B17A;
background: ${p=>p.theme.colors.white};
border-radius: 40px;
opacity: 0px;

cursor: pointer;

&:hover{
    color: #FFFFFF;
    background: ${p=>p.theme.colors.green};
}
`
export const Span=styled.span`
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 1,29;
text-align: left;
color: #6A6A6F;
`
export const TextAbout=styled.p`
margin-bottom:10px;
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 1,29;
text-align: left;
color: #6A6A6F;
`

export const Text=styled.p`
margin-bottom:10px;
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 1,29;
text-align: left;
color: #1D1E21;
`

export const ContainerDiscription=styled.div`
padding:0 40px;
`

export const ContainerReveiws=styled.ul`
padding:0 80px;
list-style: none;
`

export const Img=styled.img`
border-radius: 50%;
width: 44px;
height: 44px;
background: ${p=>p.theme.colors.green}
`

export const TextName=styled.p`
margin-bottom: 5px;
font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 1,4;
text-align: left;
color: #1D1E21;
`

export const TextTime=styled.p`
font-family: Inter;
font-size: 12px;
font-weight: 400;
line-height: 1,2;
text-align: left;
color: #1D1E2199;
`

export const TextRating=styled.p`
font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
text-align: left;
color: #1D1E21;
`

export const TextReview=styled.p`
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 1,29;
text-align: left;
color: #6A6A6F;
`

export const ContainerReviewsInfo=styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
`
export const ContainerRating=styled.div`
display: flex;
gap:5px;
`
export const ContainerList=styled.li`
margin-bottom: 40px;
`