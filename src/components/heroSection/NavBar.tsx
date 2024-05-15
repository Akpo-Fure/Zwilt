import styled from "styled-components";
import { useState } from "react";
import colors from "../../constants/colors";
import fontSizes from "../../constants/fonts";
import device from "../../constants/breakpoints";
import ZwiltLogo from "../../assets/ZwiltLogo.png";
import { NavProps } from "../../interfaces/interfaces";

const NavBarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 4em;
  padding: 1em 2em;
  border-radius: 15px;
  background-color: ${colors.blue1};

  @media ${device.laptop} {
    display: none;
  }
`;

const NavBarContainerMobile = styled.header`
  display: none;

  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em 2em;
    padding: 1em 2em;
    border-radius: 15px;
    background-color: ${colors.blue1};
    gap: 1em;
    flex-direction: column;
  }

  @media ${device.mobile} {
    margin: 0.5em 1em;
  }
`;

const NavLink = styled.a`
  color: ${({ href }) => (href === "/signup" ? colors.black1 : colors.white1)};
  text-decoration: none;
  background-color: ${({ href }) =>
    href === "/signup" ? colors.white1 : "none"};
  border-radius: 16px;
  padding: ${({ href }) => (href === "/signup" ? "0.5em 1em" : "0")};
  font-size: ${fontSizes.l};
  font-weight: 500;
  margin: 0 1em;
  text-align: center;
  &:hover {
    color: ${colors.black1};
  }
`;

const AlignCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const NavBar = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);

  const navBarData = [
    { name: "Find work", link: "/", isAuth: false },
    { name: "Find talent", link: "/", isAuth: false },
    { name: "Articles", link: "/", isAuth: false },
    { name: "About us", link: "/", isAuth: false },
    { name: "Contact us", link: "/", isAuth: false },
    { name: "Log in", link: "/", isAuth: true },
    { name: "Join now", link: "/signup", isAuth: true },
  ];
  return (
    <>
      <NavBarContainer>
        <img src={ZwiltLogo} alt="Zwilt" />
        <div>
          {navBarData
            .filter((nav: NavProps) => !nav.isAuth)
            .map((nav: NavProps, index) => (
              <NavLink key={index} href={nav.link}>
                {nav.name}
              </NavLink>
            ))}
        </div>
        <AlignCenter>
          {navBarData
            .filter((nav) => nav.isAuth)
            .map((nav: NavProps, index) => (
              <NavLink key={index} href={nav.link}>
                {nav.name}
              </NavLink>
            ))}
        </AlignCenter>
      </NavBarContainer>
      <NavBarContainerMobile>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img src={ZwiltLogo} alt="Zwilt" />
          <AlignCenter>
            <button
              onClick={() => setIsNavBarOpen(!isNavBarOpen)}
              style={{
                transform: isNavBarOpen ? "rotate(90deg)" : "rotate(0deg)",
                transition: "all 0.3s ease-in-out",
                fontSize: fontSizes.xl,
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              ☰
            </button>
          </AlignCenter>
        </div>
        <div
          style={{
            display: isNavBarOpen ? "flex" : "none",
            transform: isNavBarOpen ? "translateY(0)" : "translateY(-100%)",
            transition: "all 0.3s ease-in-out",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          {navBarData
            .filter((nav: NavProps) => !nav.isAuth)
            .map((nav: NavProps, index) => (
              <NavLink key={index} href={nav.link}>
                {nav.name}
              </NavLink>
            ))}
          <AlignCenter>
            {navBarData
              .filter((nav: NavProps) => nav.isAuth)
              .map((nav: NavProps, index) => (
                <NavLink key={index} href={nav.link}>
                  {nav.name}
                </NavLink>
              ))}
          </AlignCenter>
        </div>
      </NavBarContainerMobile>
    </>
  );
};

export default NavBar;
