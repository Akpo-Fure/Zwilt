import styled from "styled-components";
import colors from "../../constants/colors";
import { SlantedContainer } from "../shared/Backgrounds";

const HowItStartedeContainer = styled.div`
  display: flex;
  background-color: ${colors.black1};
  justify-content: left;
  align-items: flex-start;
  height: 100vh;
`;

const HowItStartedComponent = () => {
  return (
    <SlantedContainer color={colors.white1}>
      <HowItStartedeContainer>
        <h1 style={{ color: "white" }}>How It Started</h1>
      </HowItStartedeContainer>
    </SlantedContainer>
  );
};

export default HowItStartedComponent;
