export interface IFeature {
  name: string;
  cost: number;
  subFeatures: IFeature[]
}

export interface IProps {
  features: IFeature[];
  selectedFeatures: any;
  onChange: (Function);
  costs: number[];
  updateCosts: (Function);
}

export interface ICheckbox {
  selected: boolean;
  label: string;
  cost: number;
  onChange: (Function);
}
