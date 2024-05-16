import styled from "styled-components";
import { useState } from "react";
import device from "../../constants/breakpoints";
import fontSizes from "../../constants/fonts";
import colors from "../../constants/colors";

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
  max-width: 800px;
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
  gap: 1em 5em;

  @media ${device.tablet} {
    gap: 1em 3em;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TabData = styled.div`
  color: ${colors.gray1};
  cursor: pointer;

  &:hover {
    color: ${colors.black1};
  }
`;

const TabBar = () => {
  const tabs = ["IT & Development", "Design and Creative"];

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

  const [activeTab, setActiveTab] = useState("IT & Development");
  const [activeData, setActiveData] = useState(ITData);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "IT & Development") {
      setActiveData(ITData);
    } else if (tab === "Design and Creative") {
      setActiveData(DesignData);
    }
  };

  return (
    <TabContainer>
      <TabBarWrapper>
        <Tabs>
          {tabs.map((tab) => (
            <div
              key={tab}
              style={{
                color: colors.black1,
                backgroundColor: activeTab === tab ? colors.green1 : "",
                fontWeight: activeTab === tab ? "600" : "500",
                padding: "0.75em 1.5em",
                borderRadius: "15px",
                cursor: "pointer",
              }}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </div>
          ))}
        </Tabs>
        <TabGrid>
          {activeData.map((data) => (
            <TabData key={data}>{data}</TabData>
          ))}
        </TabGrid>
      </TabBarWrapper>
    </TabContainer>
  );
};

export default TabBar;
