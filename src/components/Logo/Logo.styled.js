import styled from "styled-components";

export const ContaterLogo = styled.div`
display: flex;
gap: ${p=>p.theme.spacing(2)};
align-items: center;
cursor: pointer;
&:hover{
    text-decoration: underline;
}
`

export const ImgLogo = styled.img`
width: 32px;
height: 32px;

@media (min-width: 768px) {
    width: 44px;
    height: 44px;
}
`

export const TextLogo = styled.p`
font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 1,21;
letter-spacing: -0.03em;
color: ${props => (props.$isHome || props.$stylefooter? '#FFFFFF' : '#1D1E21')}; 

@media (min-width: 768px) {
font-size: 20px;
}
`