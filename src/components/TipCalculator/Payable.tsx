import React from "react";
// Importing Components
import { ContentContainerWithBG } from "./elements/ContentContainer";
import ResetButton from "./elements/ResetButton";

function Payable() {
  return (
    <ContentContainerWithBG>
      <ResetButton type="button">RESET</ResetButton>
    </ContentContainerWithBG>
  )
}

export default Payable;
