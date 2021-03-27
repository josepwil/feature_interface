import { useState } from 'react'

import { IFeature, IProps } from './types'
import Checkbox from './Checkbox'

const FeaturesList: React.FC<IProps> = ({ features, selectedFeatures, onChange }) => {

  const [cost, setCost] = useState(features.map(x => x.cost))
  console.log('I am cost', cost)

  const handleCheckBoxClicked = (featureName: string) => {
    if(selectedFeatures[featureName]) {
      delete selectedFeatures[featureName]
    } else {
      selectedFeatures[featureName] = {}
    }
    onChange(selectedFeatures)
  }

  const handleSubFeaturesListChange = (featureName: string, subSelections: any) => {
    console.log('I am sub selections ', subSelections)
    selectedFeatures[featureName] = subSelections;
    onChange(selectedFeatures)
  }

  return (
    <div>
      {features.map((feature: IFeature, index: number) => (
        <ul>
          <Checkbox 
            key={index}
            label={feature.name}
            cost={cost[index]}
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