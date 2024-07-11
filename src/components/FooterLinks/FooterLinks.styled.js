import styled from "styled-components";

export const Text=styled.p`
margin-bottom: ${p=>p.theme.spacing(2)};
font-family: Inter;
font-size: 10px;
font-weight: 400;
line-height: 1;

color: ${p=>p.theme.colors.whiteblue};

@media (min-width: 768px) {
font-size: 14px;
line-height: 1,29;
}
`

export const Slesh=styled.p`
margin-left: ${p=>p.theme.spacing(2)};
margin-right: ${p=>p.theme.spacing(2)};
margin-bottom: ${p=>p.theme.spacing(2)};
width: 1px;
height: 10px;
border-radius: 8px;
opacity: 0.2px;

background: ${p=>p.theme.colors.whiteblue};
`