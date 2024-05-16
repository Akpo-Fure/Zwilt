import styled from "styled-components";
import NavBar from "./NavBar";
import HeroText from "./HeroText";
import InputComponent from "../shared/Inputs";
import TabBar from "./TabBar";

const HeroContainer = styled.div`
  flex-direction: column;
  height: 100vh;
`;

const HeroComponent = () => {
  return (
    <HeroContainer>
      <NavBar />
      <HeroText />
      <InputComponent />
      <TabBar />
    </HeroContainer>
  );
};

export default HeroComponent;
