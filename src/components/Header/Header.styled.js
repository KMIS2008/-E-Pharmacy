import styled from "styled-components";

export const ContaterHeder = styled.div`
/* position: fixed; */
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

