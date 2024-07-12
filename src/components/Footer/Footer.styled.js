import styled from "styled-components";

export const Contater = styled.div`
padding: 25px 94px 25px 20px;
background-color: ${props => (props.theme.colors.green)}; 

@media (min-width: 1440px) {
 
   padding: 25px 128px 25px 128px;
}
`
export const Text = styled.p`

margin-top: ${p=>p.theme.spacing(4)};
margin-bottom: ${p=>p.theme.spacing(4)};
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 18px;
text-align: left;

color: ${p=>p.theme.colors.whiteblue};

@media (min-width: 768px) {
   width: 261px; 
}
`
export const Line = styled.div`
margin-top: ${p=>p.theme.spacing(12)};
margin-bottom: ${p=>p.theme.spacing(4)};
width: 100%;
border: 1px solid #F7F8FA4D
`

export const ContainerCopyright=styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;

@media (min-width: 768px) {
    justify-content: center;
}
`
export const CotnainerLinks=styled.div`
@media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
}
`
export const ContainerSpecial = styled.div`

@media (min-width: 1440px) {
  display: flex;
justify-content: space-between;  
align-items: start;
padding-left: 60px;
width: 100%;
}
`

