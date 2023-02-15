import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { PeopleProps } from "../../types/people";
// Importing Components
import { FlexWrapper } from "./elements/FlexWrapper";
import Label from "./elements/Label";
import Input from "./elements/Input";
import Error from "./elements/Error";

function People(props: PeopleProps) {
  const [isError, setIsError] = useState<boolean>(false);

  const { people, setPeople } = props;

  useEffect(() => {
    if (people === 0) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [people])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 5) {
      setPeople(event.target.valueAsNumber);
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === '.') {
      event.preventDefault();
    }
  }

  return (
    <FlexWrapper>
      <Label htmlFor="people">Number of People</Label>
      <Error>{isError ? "Can't be zero" : null}</Error>
      <Input
        type="number"
        iconType="person"
        isError={isError}
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
