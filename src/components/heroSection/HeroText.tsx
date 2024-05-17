import styled from "styled-components";
import device from "../../constants/breakpoints";
import fontSizes from "../../constants/fonts";
import colors from "../../constants/colors";
import FitImage from "../../assets/fitImage.png";

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0em;
  padding: 5em 0em 2em 0em;
  align-items: center;
`;

export const HeroTextTitle = styled.span`
  font-weight: 700;
  text-align: center;
  font-size: ${fontSizes.xxxxxxxl};
  word-wrap: break-word;
  width: 100%;
  max-width: 800px;
  color: ${({ color }) => color || colors.black1};
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

export const HeroTextSubtitle = styled.span`
  text-align: center;
  font-size: ${fontSizes.xxl};
  color: ${({ color }) => color || colors.black1};
  line-height: 1.2;
  word-wrap: break-word;
  width: 100%;
  //add props ro max-width
  max-width: 690px;

  @media ${device.laptop} {
    font-size: ${fontSizes.xl};
    max-width: 550px;
  }

  @media ${device.tablet} {
    font-size: ${fontSizes.l};
    max-width: 400px;
  }
`;

const Image = styled.img`
  width: 75px;
  height: 45px;
  margin: 0px;
  @media ${device.tablet} {
    width: 50px;
    height: 30px;
  }
`;

const HeroText = () => {
  return (
    <HeroTextContainer>
      <HeroTextTitle
        style={{
          maxWidth: "100%",
          width: "100%",
        }}
      >
        Finding the right fit <Image src={FitImage} alt="fit" /> has
        <br /> never been easier.
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
