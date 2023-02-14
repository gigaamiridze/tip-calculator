import React, { ChangeEvent } from "react";
import { PeopleProps } from "../../types/people";
// Importing Components
import { FlexWrapper } from "./elements/FlexWrapper";
import Label from "./elements/Label";
import Input from "./elements/Input";

function People(props: PeopleProps) {
  const { people, setPeople } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPeople(event.target.valueAsNumber);
  }

  return (
    <FlexWrapper>
      <Label htmlFor="people">Number of People</Label>
      <Input
        type="number"
        iconType="person"
        placeholder="0"
        name="people"
        id="people"
        min={0}
        value={people}
        onChange={handleChange}
      />
    </FlexWrapper>
  )
}

export default People;
