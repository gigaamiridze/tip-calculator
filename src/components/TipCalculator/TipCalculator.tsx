import React, { useState } from 'react';
// Importing Components
import Card from './elements/Card';
import Calculation from './Calculation';
import Payable from './Payable';

function TipCalculator() {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [tip, setTip] = useState<number | undefined>(undefined);
  const [people, setPeople] = useState<number | undefined>(undefined);

  const alright = bill !== undefined && tip !== undefined && people !== undefined;
  const tipAmount = alright && (bill * tip / people).toFixed(2);
  const total = alright && (bill * (1 + tip) / people).toFixed(2);

  return (
    <Card>
      <Calculation
        bill={bill}
        tip={tip}
        people={people}
        setBill={setBill}
        setTip={setTip}
        setPeople={setPeople}
      />
      <Payable 
        tipAmount={tipAmount} 
        total={total}
      />
    </Card>
  )
}

export default TipCalculator;
