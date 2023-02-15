import React, { ChangeEvent } from "react";
import { TipProps } from "../../types/tip";
// Importing Components
import { FlexWrapperWithMargin } from "./elements/FlexWrapper";
import Label from "./elements/Label";
import Input from "./elements/Input";
import TipContainer from "./elements/TipContainer";
import TipButton from "./elements/TipButton";

function Tip(props: TipProps) {
  const { tip, setTip } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 4) {
      setTip(event.target.valueAsNumber / 100);
    }
  }

  return (
    <FlexWrapperWithMargin>
      <Label>Select Tip %</Label>
      <TipContainer>
        {[5, 10, 15, 25, 50].map((percentage, index) => (
          <TipButton 
            type="button"
            key={index}
            isActive={tip === percentage / 100}
            onClick={() => setTip(percentage / 100)}
          >
            {percentage}%
          </TipButton>
        ))}
        <Input
          style={{ width: 117 }}
          type="number"
          placeholder="Custom"
          name="custom"
          id="custom"
          min={0}
          max={100}
          value={tip && tip * 100}
          onChange={handleChange}
        />
      </TipContainer>
    </FlexWrapperWithMargin>
  )
}

export default Tip;
