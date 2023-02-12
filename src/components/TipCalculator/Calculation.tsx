import React from "react";
// Importing Components
import { Wrapper } from "./elements/Wrapper";
import Label from "./elements/Label";
import Input from "./elements/Input";

function Calculation() {
  return (
    <Wrapper>
      <Label htmlFor="bill">Bill</Label>
      <Input 
        type="text"
        iconType="bill"
        placeholder="0" 
        name="bill" 
        id="bill"
      />
      <Label htmlFor="people">Select Tip %</Label>
      <Input 
        type="text"
        iconType="person"
        placeholder="0"
        name="people"
        id="people"
      />
    </Wrapper>
  )
}

export default Calculation;
