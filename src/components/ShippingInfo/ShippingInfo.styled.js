import styled from "styled-components";

export const Title=styled.h5`
margin-bottom: 5px;
font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 1,4;
text-align: left;
color: #1D1E21;

@media (min-width: 768px) {
    font-size: 20px;
}
`

export const Container=styled.div`
padding: ${p=>p.theme.spacing(4)};
background: ${p=>p.theme.colors.white};
border-radius: 27px;

@media (min-width: 768px) {
    padding: 40px 80px;}
`

export const Text=styled.p`
margin-bottom: ${p=>p.theme.spacing(8)};
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 1,29;
text-align: left;
color: #6A6A6F;

@media (min-width: 768px) {
    font-size: 16px;
}
`
export const ContainerForm=styled.div`

@media (min-width: 768px) {
    display: grid;
grid-template-columns: repeat(2, 1fr);
}
`

export const Label=styled.label`
padding-left: 20px;
font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 1,29px;
text-align: left;

@media (min-width: 768px) {
    padding-left: 0;
    margin-right: 20px;
}
`

export const LabelText = styled.span`
@media (min-width: 768px) {
    margin-left: 20px;
}
`;

export const Input = styled.input`
  margin-bottom: ${p => p.theme.spacing(2)};
  margin-top: 10px;
  width: 100%;
  height: 44px;
  padding: 0 0 0 20px;
  border-radius: 60px;
  border: 1px solid #1d1e2133;
  outline: none;

  &:hover {
    border: 1px solid #59B17A;
  }

  &::placeholder {
    color: #1d1e2166;
  }
`

export const Line=styled.div`
border: 1px solid #1D1E211A;
margin: 20px 0;
`
export const RadioGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    justify-content: center;
`;

export const RadioInput=styled.input`
margin-right: 10px;
width: 18px;
height: 18px;
outline: none;

border-radius: 10px;
opacity: 0px;
border: 2px solid #12141733;

&:checked {
    border: 2px solid #59B17A;
}
&:hover {
    border: 2px solid #59B17A;
}
`

export const RadioLabel=styled.label`
margin-bottom: 10px;
display: flex;
align-items: center;
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 1,29;
text-align: left;
color: #1D1E2199;

&:hover{
    color: #1D1E21;
}
&:checked {
    color: #1D1E21;
}
`

export const ContainerTotal=styled.div`
padding: 20px;
display: flex;
align-items: center;
justify-content: space-between;
height: 50px;
border-radius: 8px;
opacity: 0px;
background: #E7F1ED;

@media (min-width: 768px) {
    height: 65px;
}
`

export const TextTotal=styled.p`
font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 1,4;
color: #1D1E21;

@media (min-width: 768px) {
    font-size: 18px;
}
`

export const Button=styled.button`
margin-top: ${p=>p.theme.spacing(4)};
font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
text-align: center;
color: #FFFFFF;

width:141px;
height: 44px;
padding: 13px 32px 13px 32px;
border-radius: 60px;
opacity: 0px;
background: ${p=>p.theme.colors.green}
`