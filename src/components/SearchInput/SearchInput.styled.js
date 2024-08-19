import styled from "styled-components";

export const ContainerInput = styled.div`
position: relative;
`

export const Svg = styled.svg`
position: absolute;
top:30%;
right: 10px;
`

export const Input = styled.input`
margin-bottom: ${p=>p.theme.spacing(2)};
width: 100%;
height: 44px;
padding: 0 0 0 20px;
border-radius: 60px;
border: 1px solid #1D1E2133;

    &:hover {
            border: 1px solid #59B17A;
          }

    &::placeholder {
        color: #1D1E2166; 
  }
`