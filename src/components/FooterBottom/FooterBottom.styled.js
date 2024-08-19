import styled from "styled-components";

export const Text = styled.p`
margin-bottom: ${p=>p.theme.spacing(2)};
font-family: Inter;
font-size: 10px;
font-weight: 400;
line-height: 1;

color: #F7F8FA;

@media (min-width: 768px) {
font-size: 14px;
line-height: 1,29;
}
`