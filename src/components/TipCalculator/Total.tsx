import React from "react";
import { TotalProps } from "../../types/total";
// Importing Components
import { FlexBoxWithMargin } from "./elements/FlexBox";
import BillName from "./elements/BillName";
import PerPerson from "./elements/PerPerson";
import Price from "./elements/Price";

function Total(props: TotalProps) {
  const { showTotal, total } = props;

  return (
    <FlexBoxWithMargin>
      <div>
        <BillName>Total</BillName>
        <PerPerson>/ person</PerPerson>
      </div>
      <Price>${showTotal ? total : "0.00"}</Price>
    </FlexBoxWithMargin>
  )
}

export default Total;
