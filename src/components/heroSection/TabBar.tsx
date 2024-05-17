import styled from "styled-components";
import { useState, useEffect } from "react";
import device from "../../constants/breakpoints";
import fontSizes from "../../constants/fonts";
import colors from "../../constants/colors";
import useResponsive from "../../hooks/useResponsive";

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
`;

const TabBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.gray2};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 1em;
  width: 100%;
  max-width: 1200px;
`;

const Tabs = styled.div`
  display: flex;
  gap: 0em;
  background-color: ${colors.gray3};
  border-radius: 1em;
`;

const TabGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em 12em;

  @media ${device.laptop} {
    gap: 1em 7em;
  }

  @media ${device.tablet} {
    gap: 1em 3em;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    gap: 1em 1em;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TabData = styled.div`
  color: ${colors.gray1};
  cursor: pointer;

  &:hover {
    font-weight: 500;
    color: ${colors.black1};
  }
`;

const TabBar = () => {
  const ITData = [
    "Python Developer",
    "Shopify Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Data Scientist",
    "Front End Developer",
    "Shopify Developer",
    "Python Developer",
    "Shopify Developer",
    "Python Developer",
    "Full Stack Developer",
    "Explore More",
  ];

  const DesignData = [
    "Product Designer",
    "UX/UI Designer",
    "Graphic Designer",
    "Web Designer",
    "Illustrator",
    "3D Designer",
    "Graphic Designer",
    "Web Designer",
    "Illustrator",
    "3D Designer",
    "Product Designer",
    "Explore More",
  ];

  const theTabs = [
    { name: "IT & Development", data: ITData },
    { name: "Design and Creative", data: DesignData },
  ];

  const [activeTab, setActiveTab] = useState("IT & Development");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const { isMobile } = useResponsive();

  return (
    <TabContainer>
      <TabBarWrapper>
        <Tabs>
          {theTabs.map((tab) => (
            <div
              key={tab.name}
              style={{
                color: colors.black1,
                backgroundColor: activeTab === tab.name ? colors.green1 : "",
                fontWeight: activeTab === tab.name ? "600" : "500",
                padding: isMobile ? "0.75em 1em" : "0.75em 1.5em",
                borderRadius: "15px",
                cursor: "pointer",
              }}
              onClick={() => handleTabChange(tab.name)}
            >
              {tab.name}
            </div>
          ))}
        </Tabs>
        <TabGrid>
          {theTabs.map(
            (tab) =>
              tab.name === activeTab &&
              tab.data.map((data) => <TabData key={data}>{data}</TabData>)
          )}
        </TabGrid>
      </TabBarWrapper>
    </TabContainer>
  );
};

export default TabBar;
