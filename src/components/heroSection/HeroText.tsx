import styled from "styled-components";
import device from "../../constants/breakpoints";
import fontSizes from "../../constants/fonts";
import colors from "../../constants/colors";

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0em;
  padding: 5em 0em 2em 0em;
  align-items: center;
`;

//use word-wrap: break-word; to break the word if it exceeds the container width
const HeroTextTitle = styled.span`
  font-weight: 700;
  text-align: center;
  font-size: ${fontSizes.xxxxxxxl};
  word-wrap: break-word;
  width: 100%;
  max-width: 800px;
  color: ${colors.black1};
  line-height: 1;
  @media ${device.laptop} {
    font-size: ${fontSizes.xxxxxxl};
    max-width: 700px;
  }

  @media ${device.tablet} {
    font-size: ${fontSizes.xxxxxl};
    max-width: 600px;
  }

  @media ${device.mobile} {
    font-size: ${fontSizes.xxxl};
    max-width: 350px;
  }
`;

const HeroTextSubtitle = styled.span`
  text-align: center;
  font-size: ${fontSizes.xxl};
  color: ${colors.black1};
  line-height: 1.2;
  word-wrap: break-word;
  width: 100%;
  max-width: 650px;

  @media ${device.laptop} {
    font-size: ${fontSizes.xl};
    max-width: 550px;
  }

  @media ${device.tablet} {
    font-size: ${fontSizes.l};
    max-width: 400px;
  }
`;

const HeroText = () => {
  return (
    <HeroTextContainer>
      <HeroTextTitle>
        Finding the right fit has never been easier.
      </HeroTextTitle>
      <HeroTextSubtitle
        style={{
          marginTop: "1em",
        }}
      >
        With our rigorous pre-vetting process, you'll never have to worry about
        finding the ideal candidate ever again.
      </HeroTextSubtitle>
    </HeroTextContainer>
  );
};

export default HeroText;
