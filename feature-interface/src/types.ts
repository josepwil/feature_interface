export interface IFeature {
  name: string;
  cost: number;
  subFeatures: IFeature[]
}

export interface IProps {
  features: IFeature[];
  selectedFeatures: any;
  onChange: any
}

export interface ICheckbox {
  selected: boolean;
  label: string;
  cost: number;
  onChange: any
}