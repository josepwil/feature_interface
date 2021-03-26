export interface IFeature {
  name: string;
  cost: number;
  subFeatures: IFeature[]
}

export interface IProps {
  features: IFeature[]
}