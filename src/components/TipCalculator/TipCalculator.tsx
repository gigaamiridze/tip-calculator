import React, { useState } from 'react';
// Importing Components
import Card from './elements/Card';
import Calculation from './Calculation';
import Payable from './Payable';

function TipCalculator() {
  const [bill, setBill] = useState<any>(undefined);
  const [buttonTip, setButtonTip] = useState<any>(undefined);
  const [customTip, setCustomTip] = useState<any>(undefined);
  const [people, setPeople] = useState<any>(undefined);

  const tip = buttonTip ? buttonTip : customTip;

  const alright = bill !== undefined && (buttonTip !== undefined || customTip !== undefined) && people !== undefined;
  const tipAmount = alright && ((bill * tip) / people).toFixed(2);
  const total = alright && ((bill * (1 + tip)) / people).toFixed(2);

  const showTip = alright &&!(tipAmount === 'NaN' || tipAmount === 'Infinity');
  const showTotal = alright && !(total === 'NaN' || total === 'Infinity');

  const resetInputs = () => {
    setBill("");
    setButtonTip("");
    setCustomTip("");
    setPeople("");
  }
  
  return (
    <Card>
      <Calculation
        bill={bill}
        buttonTip={buttonTip}
        customTip={customTip}
        people={people}
        setBill={setBill}
        setButtonTip={setButtonTip}
        setCustomTip={setCustomTip}
        setPeople={setPeople}
      />
      <Payable
        showTip={showTip}
        tipAmount={tipAmount}
        showTotal={showTotal}
        total={total}
        resetInputs={resetInputs}
      />
    </Card>
  )
}

export default TipCalculator;
