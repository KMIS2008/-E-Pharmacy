import styled from "styled-components";

export const Container=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
border-radius: 50%;
background: #59B17A1A;

@media (min-width: 768px) {
    width: 44px;
    height: 44px;
}
`

export const Text = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  color: ${p => p.theme.colors.green};
  
  font-size: 0; 

  &::first-letter {
    font-size: 14px;
    display: inline-block;
    color: ${p => p.theme.colors.green};
  }

  @media (min-width: 768px) {
    &::first-letter {
    font-size: 18px;
  }
}
`;