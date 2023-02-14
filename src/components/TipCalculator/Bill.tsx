import React, { ChangeEvent } from "react";
import { BillProps } from '../../types/bill';
// Importing Components
import { FlexWrapper } from "./elements/FlexWrapper";
import Label from "./elements/Label";
import Input from "./elements/Input";

function Bill(props: BillProps) {
  const { bill, setBill } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBill(event.target.valueAsNumber);
  }

  return (
    <FlexWrapper>
      <Label htmlFor="bill">Bill</Label>
      <Input
        type="number"
        iconType="bill"
        placeholder="0"
        name="bill"
        id="bill"
        min={0}
        value={bill}
        onChange={handleChange}
      />
    </FlexWrapper>
  )
}

export default Bill;
