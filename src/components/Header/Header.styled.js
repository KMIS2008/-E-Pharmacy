import styled from "styled-components";

export const ContaterHeder = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 25px 20px;
background-color: ${props => (props.$isHome ? '#59B17A' : '#F7F8FA')}; 

@media (min-width: 1440px) {
    padding: 25px 128px;
}
`

export const Svg = styled.svg`
width: 32px;
height: 26px;
cursor: pointer;
`

export const ContainerSvgCart=styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 44px;
height: 44px;
border-radius: 50%;
background: ${p=>p.theme.colors.white};
`

export const ContainerNavigate=styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:10px;
`

export const CounterCarts=styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 0px;
right: 0;
width: 16px;
height: 16px;

font-family: Inter;
font-size: 12px;
font-weight: 700;
line-height: 1,21;

color: ${p=>p.theme.colors.green};
background: #59B17A1A;
border-radius: 50%;
`