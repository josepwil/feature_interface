import { IFeature, IProps } from './types'
import Checkbox from './Checkbox'

const FeaturesList: React.FC<IProps> = ({ features, selectedFeatures, onChange }) => {

  const handleCheckBoxClicked = (featureName: string) => {
    if(selectedFeatures[featureName]) {
      delete selectedFeatures[featureName]
    } else {
      selectedFeatures[featureName] = {}
    }
    onChange(selectedFeatures)
  }

  const handleSubFeaturesListChange = (featureName: string, subSelections: any) => {
    selectedFeatures[featureName] = subSelections;
    onChange(selectedFeatures)
  }

  return (
    <div>
      {features.map((feature: IFeature) => (
        <ul>
          <Checkbox 
            label={feature.name}
            cost={feature.cost}
            selected={selectedFeatures[feature.name]}
            onChange={() => handleCheckBoxClicked(feature.name)}
          />
          {(feature.subFeatures.length > 0 && selectedFeatures[feature.name]) &&
            <FeaturesList 
              features={feature.subFeatures}
              selectedFeatures={selectedFeatures[feature.name]}
              onChange={(subSelections: any) => handleSubFeaturesListChange(feature.name, subSelections)}
            />
          }
        </ul>
      ))}
    </div>
  )
}

export default FeaturesList