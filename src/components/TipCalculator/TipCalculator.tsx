import React from 'react';
// Importing Components
import Card from './elements/Card';
import Calculation from './Calculation';
import Payable from './Payable';

function TipCalculator() {
  return (
    <Card>
      <Calculation />
      <Payable />
    </Card>
  )
}

export default TipCalculator;
