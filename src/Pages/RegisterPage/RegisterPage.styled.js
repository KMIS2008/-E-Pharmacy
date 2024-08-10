import styled from "styled-components";

export const Container=styled.div`
padding: ${p=>p.theme.spacing(4)};

@media (min-width: 1440px) {
    display: flex;
    gap: 40px;
}
`

