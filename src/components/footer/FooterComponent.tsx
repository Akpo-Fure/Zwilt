import styled from "styled-components";
import { SlantedContainer } from "../shared/Backgrounds";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function FooterComponent() {
  return (
    <SlantedContainer>
      <FooterContainer>
        <h1>Footer</h1>
      </FooterContainer>
    </SlantedContainer>
  );
}

export default FooterComponent;
