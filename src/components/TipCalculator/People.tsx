import React from "react";
// Importing Components
import { FlexWrapper } from "./elements/FlexWrapper";
import Label from "./elements/Label";
import Input from "./elements/Input";

function People() {
  return (
    <FlexWrapper>
      <Label htmlFor="people">Number of People</Label>
      <Input
        type="text"
        iconType="person"
        placeholder="0"
        name="people"
        id="people"
      />
    </FlexWrapper>
  )
}

export default People;
