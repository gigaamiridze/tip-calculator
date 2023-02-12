import React from "react";
// Importing Components
import { FlexWrapperWithMargin } from "./elements/FlexWrapper";
import Label from "./elements/Label";
import Input from "./elements/Input";
import TipContainer from "./elements/TipContainer";
import TipButton from "./elements/TipButton";

function Tip() {
  return (
    <FlexWrapperWithMargin>
      <Label>Select Tip %</Label>
      <TipContainer>
        {[5, 10, 15, 25, 50].map((percentage, index) => (
          <TipButton key={index} type="button">
            {percentage}%
          </TipButton>
        ))}
        <Input
          style={{ width: 117 }}
          type="text"
          placeholder="Custom"
          name="custom"
          id="custom"
        />
      </TipContainer>
    </FlexWrapperWithMargin>
  )
}

export default Tip;
