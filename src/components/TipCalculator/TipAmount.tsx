import React from "react";
// Importing Components
import FlexBox from "./elements/FlexBox";
import BillName from "./elements/BillName";
import PerPerson from "./elements/PerPerson";
import Price from "./elements/Price";

function TipAmount() {
  return (
    <FlexBox>
      <div>
        <BillName>Tip Amount</BillName>
        <PerPerson>/ person</PerPerson>
      </div>
      <Price>$0.00</Price>
    </FlexBox>
  )
}

export default TipAmount;
