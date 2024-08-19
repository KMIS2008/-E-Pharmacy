import styled from "styled-components";

export const List=styled.ul`
display: flex;
justify-content: end;
list-style: none;
gap: 12px;
margin-top: ${p=>p.theme.spacing(4)};

@media (min-width: 1440px) {
  margin-top: ${p=>p.theme.spacing(0)};
}
`

export const IconContainer = styled.div`
  svg {
    path:first-child {
      stroke: var(--color1, #F7F8FA1A);
      transition: stroke 0.3s ease;
    }
  }

  &:hover svg path:first-child {
    stroke: var(--color2, #f7f8fa);
  }
`;