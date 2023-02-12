import React from "react";
// Importing Components
import { ContentContainerWithBG } from "./elements/ContentContainer";
import TipAmount from "./TipAmount";
import Total from "./Total";
import ResetButton from "./elements/ResetButton";

function Payable() {
  return (
    <ContentContainerWithBG>
      <div>
        <TipAmount />
        <Total />
      </div>
      <ResetButton type="button">RESET</ResetButton>
    </ContentContainerWithBG>
  )
}

export default Payable;
