import styled from "styled-components";

export const Error = styled.span`
font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,16;
letter-spacing: -0.03em;

  color: #EF2447;
  margin-bottom: 8px;
`;

export const Form = styled.form`
padding: ${p=>p.theme.spacing(4)};

@media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap:${p=>p.theme.spacing(2)}
  }
`

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
margin-bottom: 10px;
width: 116px;
height: 44px;

padding: 13px 30px;
border-radius: 60px;
opacity: 0px;

background: #59B17A;

font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 1.29;
text-align: center;
color: #FFFFFF;

cursor: pointer;
&:hover{
    background: #3F945F;
}
`