import React from "react";
// Importing Components
import { ContentContainer } from "./elements/ContentContainer";
import Label from "./elements/Label";
import Input from "./elements/Input";
import ButtonsContainer from "./elements/ButtonsContainer";
import TipButton from "./elements/TipButton";

function Calculation() {
  return (
    <ContentContainer>
      <Label htmlFor="bill">Bill</Label>
      <Input
        type="text"
        iconType="bill"
        placeholder="0"
        name="bill"
        id="bill"
      />
      <Label>Select Tip %</Label>
      <ButtonsContainer>
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
      </ButtonsContainer>
      <Label htmlFor="people">Number of People</Label>
      <Input
        type="text"
        iconType="person"
        placeholder="0"
        name="people"
        id="people"
      />
    </ContentContainer>
  )
}

export default Calculation;
