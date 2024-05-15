import styled from "styled-components";
import NavBar from "./NavBar";

const HeroContainer = styled.div`
  flex-direction: column;
  height: 100vh;
`;

const HeroComponent = () => {
  return (
    <HeroContainer>
      <NavBar />
    </HeroContainer>
  );
};

export default HeroComponent;
