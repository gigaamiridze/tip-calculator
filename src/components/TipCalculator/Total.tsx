import React from "react";
// Importing Components
import { FlexBoxWithMargin } from "./elements/FlexBox";
import BillName from "./elements/BillName";
import PerPerson from "./elements/PerPerson";
import Price from "./elements/Price";

function Total() {
  return (
    <FlexBoxWithMargin>
      <div>
        <BillName>Total</BillName>
        <PerPerson>/ person</PerPerson>
      </div>
      <Price>$0.00</Price>
    </FlexBoxWithMargin>
  )
}

export default Total;
