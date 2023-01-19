import React, { ComponentProps } from "react";
import styled, { StyledComponent } from "styled-components";
import { colors } from "../styles";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? colors.primary : "white")};
  border-radius: 3px;
  transition: all 150ms;
`;

type Props = ComponentProps<StyledComponent<"input", any, {}>>;

const Checkbox: React.FC<Props> = ({ checked, ...props }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox type="checkbox" {...props} checked={checked} />
      <StyledCheckbox checked={checked}></StyledCheckbox>
    </CheckboxContainer>
  );
};

export default Checkbox;
