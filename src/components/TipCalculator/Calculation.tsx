import React from "react";
// Importing Components
import { ContentContainer } from "./elements/ContentContainer";
import Bill from "./Bill";
import Tip from "./Tip";
import People from "./People";

function Calculation() {
  return (
    <ContentContainer>
      <Bill />
      <Tip />
      <People />
    </ContentContainer>
  )
}

export default Calculation;
