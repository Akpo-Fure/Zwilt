import styled from "styled-components";
import colors from "../../constants/colors";
import fontSizes from "../../constants/fonts";
import device from "../../constants/breakpoints";
import useResponsive from "../../hooks/useResponsive";
import { SlantedContainer } from "../shared/Backgrounds";
import { HeroTextTitle, HeroTextSubtitle } from "../heroSection/HeroText";
import GrooveLogo from "../../assets/GrooveLogo.png";
import JasonImage from "../../assets/JasonImage.png";
import GoForward from "../../assets/GoForward.png";
import GoBack from "../../assets/GoBack.png";
import GrooveHQ from "../../assets/GrooveHQ.png";

const HowItStartedeContainer = styled.div`
  display: flex;
  background-color: ${colors.black1};
  justify-content: left;
  align-items: flex-start;
  padding: 0.5em 4em;
  height: 100vh;

  @media ${device.tablet} {
    justify-content: center;
    align-items: center;
    padding: 1em 1em;
    
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  width: 100%;

  & > div {
    width: 50%;
  }

  @media ${device.tablet} {
    flex-direction: column;

    & > div {
      width: 100%;

  }
`;

const InsideDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 15em 1em;
  gap: 2em;

  @media ${device.laptop} {
    padding: 7.5em 1em;
  }

  @media ${device.tablet} {
    gap: 1em;
    padding: 0.5em 1em;
    align-items: flex-start;
  }
`;

const ActionImage = styled.img`
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const Jason = styled.img`
  @media ${device.tablet} {
    width: 30px;
    height: 30px;
  }
`;

const HowItStartedComponent = () => {
  const { isTablet } = useResponsive();
  return (
    <SlantedContainer color={colors.white1}>
      <HowItStartedeContainer>
        <Flex>
          <InsideDiv>
            <HeroTextTitle
              color={colors.white1}
              style={{
                textAlign: isTablet ? "center" : "left",
                maxWidth: "100%",
              }}
            >
              How it worked <br />
              for Jason <Jason src={JasonImage} alt="Jason Image" /> at
              <br />
              <img
                src={GrooveLogo}
                style={{ marginTop: "0.25em" }}
                alt="Groove Logo"
              />
            </HeroTextTitle>
            <HeroTextSubtitle
              color={colors.white1}
              style={{
                textAlign: isTablet ? "center" : "left",
                maxWidth: "100%",
              }}
            >
              Zwilt enabled us to deliver on time and they’ve <br />
              been heavy hitters in our corner since.
            </HeroTextSubtitle>
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "1em",
                justifyContent: isTablet ? "center" : "flex-start",
                alignItems: isTablet ? "center" : "flex-start",
              }}
            >
              <ActionImage src={GoBack} alt="Go Back" />
              <ActionImage src={GoForward} alt="Go Forward" />
            </div>
          </InsideDiv>
          <InsideDiv>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: isTablet ? "center" : "flex-start",
                justifyContent: isTablet ? "center" : "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1em",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={GrooveHQ} alt="Groove HQ" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      color: colors.white1,
                      fontSize: fontSizes.xxl,
                    }}
                  >
                    Jason Makki
                  </span>
                  <span
                    style={{
                      color: colors.gray4,
                      fontSize: fontSizes.l,
                    }}
                  >
                    Engineer at GROOVE
                  </span>
                  <span
                    style={{
                      color: colors.gray4,
                      fontSize: fontSizes.l,
                    }}
                  >
                    San Francisco
                  </span>
                </div>
              </div>
            </div>

            <HeroTextSubtitle
              color={colors.white1}
              style={{
                textAlign: isTablet ? "center" : "left",
                maxWidth: "100%",
              }}
            >
              Zwilt enabled us to deliver on time and they’ve <br />
              been heavy hitters in our corner since. Zwilt
              <br />
              enabled us to deliver on time and they’ve been
              <br />
              heavy hitters in our corner since. Zwilt enabled
              <br />
              us to deliver on time and they’ve been heavy hitters
              <br />
            </HeroTextSubtitle>
          </InsideDiv>
        </Flex>
      </HowItStartedeContainer>
    </SlantedContainer>
  );
};

export default HowItStartedComponent;
