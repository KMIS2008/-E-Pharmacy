import styled from "styled-components";

export const Container=styled.div`
padding: ${p=>p.theme.spacing(4)};
`

export const ContainerCart=styled.div`
@media (min-width: 1440px) {
   display: flex;
   justify-content: space-between; 
}
`