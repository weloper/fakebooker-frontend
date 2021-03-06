import styled from "styled-components";
import { Button, Col } from "antd";

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const AuthDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const ProjectLogo = styled.img`
  max-width: 60%;
  max-height: 100%;
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledButton = styled(Button)`
  height: 40px;
  background-color: #3b5999;
  border: 1px solid #3b5999;
  margin-bottom: 40px;

  &:hover,
  &:focus {
    background-color: #3b5999;
    outline: none;
    border-color: #3b5999;
  }
`;

export const StyledCol = styled(Col)`
  background-color: ${props => props.background};
  height: 100vh;
`;

export const LandingContentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;

  img {
    height: 100%;
    width: 100%;
  }
`;
