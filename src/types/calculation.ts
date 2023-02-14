export interface CalculationProps {
  bill: number | undefined;
  tip: number | undefined;
  people: number | undefined;
  setBill: React.Dispatch<React.SetStateAction<number | undefined>>;
  setTip: React.Dispatch<React.SetStateAction<number | undefined>>;
  setPeople: React.Dispatch<React.SetStateAction<number | undefined>>;
}
