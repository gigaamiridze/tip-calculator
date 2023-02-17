import React from "react";
import { PayableProps } from "../../types/payable";
// Importing Components
import { ContentContainerWithBG } from "./elements/ContentContainer";
import TipAmount from "./TipAmount";
import Total from "./Total";
import ResetButton from "./elements/ResetButton";

function Payable(props: PayableProps) {
  const { showTip, tipAmount, showTotal, total, isDisabled, resetInputs } = props;

  return (
    <ContentContainerWithBG>
      <div>
        <TipAmount showTip={showTip} tipAmount={tipAmount} />
        <Total showTotal={showTotal} total={total} />
      </div>
      <ResetButton 
        type="button" 
        disabled={isDisabled}
        isDisabled={isDisabled}
        onClick={resetInputs}
      >
        RESET
      </ResetButton>
    </ContentContainerWithBG>
  )
}

export default Payable;
