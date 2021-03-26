import { IFeature, IProps } from './types'

const FeaturesList: React.FC<IProps> = ({ features }) => {
  return (
    <div>
      {features.map((feature: IFeature) => (
        <ul>
          <p>{feature.name}</p>
          {feature.subFeatures.length > 0 && 
            <FeaturesList 
              features={feature.subFeatures}
            />
          }
        </ul>
      ))}
    </div>
  )
}

export default FeaturesList