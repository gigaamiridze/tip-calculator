export interface PayableProps {
  showTip: boolean;
  tipAmount: string | false;
  showTotal: boolean;
  total: string | false;
  isDisabled: boolean;
  resetInputs: () => void;
}
