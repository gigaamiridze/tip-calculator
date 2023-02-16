import React, { ChangeEvent } from "react";
import { TipProps } from "../../types/tip";
// Importing Components
import { FlexWrapperWithMargin } from "./elements/FlexWrapper";
import Label from "./elements/Label";
import Input from "./elements/Input";
import TipContainer from "./elements/TipContainer";
import TipButton from "./elements/TipButton";

function Tip(props: TipProps) {
  const { buttonTip, customTip, setButtonTip, setCustomTip } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 4) {
      setCustomTip(event.target.valueAsNumber / 100);
      setButtonTip(undefined);
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
            isActive={buttonTip === percentage / 100}
            onClick={() => {
              setButtonTip(percentage / 100)
              setCustomTip("");
            }}
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
          value={customTip && customTip * 100}
          onChange={handleChange}
        />
      </TipContainer>
    </FlexWrapperWithMargin>
  )
}

export default Tip;
