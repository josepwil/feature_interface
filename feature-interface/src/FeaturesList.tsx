import { useState } from 'react';
import { IFeature, IProps } from './types';
import Checkbox from './Checkbox';

const FeaturesList: React.FC<IProps> = ({ features, selectedFeatures, onChange, costs, updateCosts }) => {
  const [fCosts, SetFCosts] = useState(costs);



  const handleCheckBoxClicked = (featureName: string, cost: number, index: number) => {
    if(selectedFeatures[featureName]) {
      delete selectedFeatures[featureName];
      // updateCost(index, -cost) // updates current state and not parent
    } else {
      selectedFeatures[featureName] = {cost};
      // updateCost(index, cost) // updates current state and not parent
    }
    
    onChange(selectedFeatures);
  }


  const handleSubFeaturesListChange = (featureName: string, subSelections: any, index: number) => {
    selectedFeatures[featureName] = subSelections;
    onChange(selectedFeatures);
  }

  return (
    <div className='features'>
      {features.map((feature: IFeature, index: number) => (
        <ul key={index}>
          <Checkbox
            label={feature.name}
            cost={fCosts[index]}
            selected={selectedFeatures[feature.name]}
            onChange={() => handleCheckBoxClicked(feature.name, costs[index], index)}
          />
          {(feature.subFeatures.length > 0 && selectedFeatures[feature.name]) &&
            <FeaturesList 
              features={feature.subFeatures}
              selectedFeatures={selectedFeatures[feature.name]}
              onChange={(subSelections: any) => handleSubFeaturesListChange(feature.name, subSelections, index)}
              costs = {feature.subFeatures.map(x => x.cost)}
              updateCosts={(costsCopy: number[]) => updateCosts(costsCopy)}
            />
          }
        </ul>
      ))}
    </div>
  )
}

export default FeaturesList;