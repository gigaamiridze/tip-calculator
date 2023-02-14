import React from "react";
import { TipAmountProps } from "../../types/tipAmount";
// Importing Components
import { FlexBox } from "./elements/FlexBox";
import BillName from "./elements/BillName";
import PerPerson from "./elements/PerPerson";
import Price from "./elements/Price";

function TipAmount(props: TipAmountProps) {
  const { tipAmount } = props;
  const showTip = !(tipAmount === 'NaN' || tipAmount === 'Infinity');

  return (
    <FlexBox>
      <div>
        <BillName>Tip Amount</BillName>
        <PerPerson>/ person</PerPerson>
      </div>
      <Price>{showTip ? tipAmount : "$0.00"}</Price>
    </FlexBox>
  )
}

export default TipAmount;
