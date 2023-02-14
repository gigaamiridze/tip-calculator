import React from "react";
import { PayableProps } from "../../types/payable";
// Importing Components
import { ContentContainerWithBG } from "./elements/ContentContainer";
import TipAmount from "./TipAmount";
import Total from "./Total";
import ResetButton from "./elements/ResetButton";

function Payable(props: PayableProps) {
  const { tipAmount, total } = props;

  return (
    <ContentContainerWithBG>
      <div>
        <TipAmount tipAmount={tipAmount} />
        <Total total={total} />
      </div>
      <ResetButton type="button">RESET</ResetButton>
    </ContentContainerWithBG>
  )
}

export default Payable;
