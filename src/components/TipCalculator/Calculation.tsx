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
        placeholder="0" 
        name="bill" 
        id="bill"
      />
    </Wrapper>
  )
}

export default Calculation;
