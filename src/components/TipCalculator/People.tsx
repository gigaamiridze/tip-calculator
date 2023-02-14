import React, { ChangeEvent, KeyboardEvent } from "react";
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

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === '.') {
      event.preventDefault();
    }
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
        onKeyDown={handleKeyDown}
      />
    </FlexWrapper>
  )
}

export default People;
