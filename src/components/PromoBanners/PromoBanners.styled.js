import styled from "styled-components";

export const ContainerList=styled.ul`

padding: 28px 20px;
list-style: none;

@media (min-width: 768px) {
   display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 28px; 
}

@media (min-width: 768px) {
display: flex;
justify-content: center;
}
`