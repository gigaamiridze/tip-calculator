export interface TipProps {
  buttonTip: any;
  customTip: any;
  setButtonTip: React.Dispatch<any>;
  setCustomTip: React.Dispatch<any>;
}

export interface TipAmountProps {
  showTip: boolean;
  tipAmount: string | false;
}

export interface TipButtonProps {
  isActive: boolean;
}
