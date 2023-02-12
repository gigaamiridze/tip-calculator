import React from "react";
// Importing Components
import { FlexWrapper } from "./elements/FlexWrapper";
import Label from "./elements/Label";
import Input from "./elements/Input";

function Bill() {
  return (
    <FlexWrapper>
      <Label htmlFor="bill">Bill</Label>
      <Input
        type="text"
        iconType="bill"
        placeholder="0"
        name="bill"
        id="bill"
      />
    </FlexWrapper>
  )
}

export default Bill;
