import styled from "styled-components";

export const Container=styled.ul`
margin-bottom: ${p=>p.theme.spacing(10)};
display: flex;
justify-content: space-between;
list-style:none
;`

export const ContainerItem=styled.li`
display: flex;
gap:10px;
;`