import React from "react";
import { CalculationProps } from "../../types/calculation";
// Importing Components
import { ContentContainer } from "./elements/ContentContainer";
import Bill from "./Bill";
import Tip from "./Tip";
import People from "./People";

function Calculation(props: CalculationProps) {
  const { bill, tip, people, setBill, setTip, setPeople } = props;

  return (
    <ContentContainer>
      <Bill bill={bill} setBill={setBill} />
      <Tip tip={tip} setTip={setTip} />
      <People people={people} setPeople={setPeople} />
    </ContentContainer>
  )
}

export default Calculation;
