import styled from "styled-components";

export const Contater = styled.div`
padding: 25px 94px 25px 20px;
background-color: ${props => (props.theme.colors.green)}; 
`
export const Text = styled.p`
margin-top: ${p=>p.theme.spacing(4)};
margin-bottom: ${p=>p.theme.spacing(8)};
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 18px;
text-align: left;

color: ${p=>p.theme.colors.whiteblue};
`

export const Line = styled.div`
margin-top: ${p=>p.theme.spacing(10)};
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

