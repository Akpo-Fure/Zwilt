import React, { useState } from "react";
import styled from "styled-components";
import device from "../../constants/breakpoints";
import fontSizes from "../../constants/fonts";
import InputIcon from "../../assets/heroInputIcon.png";
import colors from "../../constants/colors";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  width: 570px;
  border: 2px solid ${colors.white2};

  @media ${device.tablet} {
    width: 400px;
  }

  @media ${device.mobile} {
    width: 100%;
    margin: 0 1em;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  background-color: white;
  color: ${colors.black1};
  border: none;
  outline: none;
  border-radius: 1.5em;
  padding: 0.5em 1em;
  font-size: ${fontSizes.l};

  @media ${device.tablet} {
    padding: 0.5em 1em;
    font-size: ${fontSizes.m};
  }
`;

const StyledImg = styled.img`
  cursor: pointer;
  height: 70px;

  @media ${device.tablet} {
    height: 60px;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

const InputComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClicked = () => {
    setInputValue("");
  };

  return (
    <InputContainer>
      <InputWrapper>
        <StyledInput
          type="text"
          placeholder="Looking for design"
          value={inputValue}
          onChange={handleInputChange}
        />
        <StyledImg onClick={handleClicked} src={InputIcon} alt="" />
      </InputWrapper>
    </InputContainer>
  );
};

export default InputComponent;
