import React from "react";
import { CalculationProps } from "../../types/calculation";
// Importing Components
import { ContentContainer } from "./elements/ContentContainer";
import Bill from "./Bill";
import Tip from "./Tip";
import People from "./People";

function Calculation(props: CalculationProps) {
  const { bill, buttonTip, customTip, people, setBill, setButtonTip, setCustomTip, setPeople } = props;

  return (
    <ContentContainer>
      <Bill bill={bill} setBill={setBill} />
      <Tip 
        buttonTip={buttonTip} 
        customTip={customTip} 
        setButtonTip={setButtonTip} 
        setCustomTip={setCustomTip} 
      />
      <People people={people} setPeople={setPeople} />
    </ContentContainer>
  )
}

export default Calculation;
