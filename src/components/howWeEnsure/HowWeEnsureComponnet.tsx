import styled from "styled-components";
import colors from "../../constants/colors";
import device from "../../constants/breakpoints";
import { SlantedContainer } from "../shared/Backgrounds";
import { HeroTextTitle, HeroTextSubtitle } from "../heroSection/HeroText";
import EnsureSteps from "./Steps";

const HowWeEnsureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  max-width: 50%;
  gap: 1.5em;
  padding: 0.5em 1em;
  height: 100vh;

  @media ${device.tablet} {
    max-width: 700px;
    max-width: 100%;
  }
`;

const HowWeEnsureComponent = () => {
  return (
    <SlantedContainer color={colors.white1}>
      <HowWeEnsureContainer>
        <HeroTextTitle style={{ textAlign: "left" }}>
          How we ensure you are in good hands
        </HeroTextTitle>
        <HeroTextSubtitle style={{ textAlign: "left" }}>
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days
        </HeroTextSubtitle>

        <EnsureSteps />
      </HowWeEnsureContainer>
    </SlantedContainer>
  );
};

export default HowWeEnsureComponent;
