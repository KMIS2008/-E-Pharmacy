import styled from "styled-components";

export const Container=styled.div`
display: flex;
flex-direction:  ${p=>p.$stylefooter||p.$styledisplay?"none":'column'}; 
gap: ${p=>p.theme.spacing(2)};
`

export const Button=styled.button`
padding: 10px 18px;
border-radius: 60px;
opacity: 0px;
background: ${p=>p.$stylefooter?"none":'white'};
background: ${p=>p.$isHeader&&'white'};
border: 1.15px solid #F1F1F1;
border: ${p=>p.$stylefooter&&"none"};

font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 1;
text-align: center;
color:  ${p=>p.$stylefooter?"white":'#93939A'};
color: ${p=>p.$isHeader&&'#93939A'};
cursor: pointer;

&:hover{
    background: ${p=>p.theme.colors.green};
    color: ${p=>p.theme.colors.white};
    border: 4px solid  ${p=>p.theme.colors.white};
}

&:active{
        background: ${p=>p.theme.colors.green};
    color: ${p=>p.theme.colors.white};
    border: 4px solid  ${p=>p.theme.colors.white};
}
`