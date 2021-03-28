import { IFeature, IProps } from './types'
import Checkbox from './Checkbox'

const FeaturesList: React.FC<IProps> = ({ features, selectedFeatures, onChange, parent, costs, updateCosts }) => {
  const updateCost = (index: number, cost: number) => {
    const costsCopy = [...costs]
    costsCopy[index] = costsCopy[index] + cost
    updateCosts(costsCopy)
  }

  const handleCheckBoxClicked = (featureName: string, cost: number) => {
    if(selectedFeatures[featureName]) {
      delete selectedFeatures[featureName]
    } else {
      selectedFeatures[featureName] = {cost};
    }

    // updateCost(parent, cost)
    onChange(selectedFeatures)
  }

  const handleSubFeaturesListChange = (featureName: string, subSelections: any, index: number) => {
    selectedFeatures[featureName] = subSelections;
    onChange(selectedFeatures)
  }

  return (
    <div className='features'>
      {features.map((feature: IFeature, index: number) => (
        <ul key={index}>
          <Checkbox
            label={feature.name}
            cost={costs[index]}
            selected={selectedFeatures[feature.name]}
            onChange={() => handleCheckBoxClicked(feature.name, costs[index])}
          />
          {(feature.subFeatures.length > 0 && selectedFeatures[feature.name]) &&
            <FeaturesList 
              features={feature.subFeatures}
              selectedFeatures={selectedFeatures[feature.name]}
              onChange={(subSelections: any) => handleSubFeaturesListChange(feature.name, subSelections, index)}
              parent={index}
              costs = {feature.subFeatures.map(x => x.cost)}
              updateCosts={(costsCopy: any) => updateCosts(costsCopy)}
            />
          }
        </ul>
      ))}
    </div>
  )
}

export default FeaturesList