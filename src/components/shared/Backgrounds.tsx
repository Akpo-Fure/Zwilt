import styled from "styled-components";
import colors from "../../constants/colors";

export const SlantedContainer = styled.div`
  background-color: ${({ color }) => color || colors.black1};
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
  padding: 2em;
`;

// const BehindSlantedContainerTopLeft = styled.div`
//   background-color: ${({ color }) => color || colors.blue1};
//   clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
// `;

// const BehindSlantedContainerBottomRight = styled.div`
//   background-color: ${({ color }) => color || colors.black1};
//   clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
// `;
