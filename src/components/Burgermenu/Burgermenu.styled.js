import styled from "styled-components";

export const Container = styled.div`
position: fixed;
  margin: 0 auto;
  padding-top: 260px;
  padding-bottom: 40px;

  top: 0;
  left: auto;
  right: 0;
  width: 210px;
  height: 100%; 
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => (props.theme.colors.green)}; 

  z-index: 1;

  @media (min-width: 768px) {
    width: 334px;
  }
`;

export const CloseIcon = styled.svg`
  position: absolute;
  top: 28px;
  right: 32px;
  width: 32px;
  height: 32px;
  cursor: pointer;

  &:hover{
    width: 35px;
    height: 35px;
}
`;
