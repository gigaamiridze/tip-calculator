import React from "react";
// Importing Components
import { ContentContainerWithBG } from "./elements/ContentContainer";
import TipAmount from "./TipAmount";
import ResetButton from "./elements/ResetButton";

function Payable() {
  return (
    <ContentContainerWithBG>
      <TipAmount />
      <ResetButton type="button">RESET</ResetButton>
    </ContentContainerWithBG>
  )
}

export default Payable;
