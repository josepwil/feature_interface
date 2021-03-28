import { useState, useEffect } from 'react';
import './App.scss';
import FeaturesList from './FeaturesList';

function App() {
  // mock data
  const featureData = [
    {
      name: 'Feature A',
      cost: 0,
      subFeatures: [
        {
          name: 'Sub-feature A-1',
          cost: 15,
          subFeatures: []
        },
        {
          name: 'Sub-feature A-2',
          cost: 0,
          subFeatures: [
            {
              name: 'Sub-feature A-2-1',
              cost: 50,
              subFeatures: []
            },
            {
              name: 'Sub-feature A-2-2',
              cost: 25,
              subFeatures: []
            }
          ]
        },
        {
          name: 'Sub-feature A-3',
          cost: 20,
          subFeatures: []
        }
      ]
    },
    {
      name: 'Feature B',
      cost: 20,
      subFeatures: []
    },
    {
      name: 'Feature C',
      cost: 10,
      subFeatures: []
    }
  ]

  const [state, setState] = useState({selectedFeatures: {}});
  const [costs, setCosts] = useState(featureData.map(feature => feature.cost));
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    function flatObject(obj: any) {
      const flatObject: any = {};
      const path: string[] = [];
  
      function dig(obj: any) {
        if (obj !== Object(obj)) {
          return flatObject[path.join('.')] = obj;
        }
        for (let key in obj) {
            path.push(key);
            dig(obj[key]);
            path.pop();
        }
      }
      dig(obj);
      return flatObject;
    }

    const flatSelectedFeatures = flatObject(state.selectedFeatures);
    let newTotal = 0;
    for (const feature in flatSelectedFeatures) {
      newTotal += flatSelectedFeatures[feature]
    }
    setTotalCost(newTotal);
  }, [state]);


  return (
    <div className='App'>
      <header>
        <h3>Subscription Preferences</h3>
      </header>
      <main>
        <FeaturesList 
          features={featureData}
          onChange={(selectedFeatures: any) => setState({selectedFeatures})}
          selectedFeatures={state.selectedFeatures}
          costs={costs}
          updateCosts={(costs: number[]) => setCosts(costs)}
        />
      </main>
      <footer>
        <h3>Total: ${totalCost} / mo</h3>
        <button>Save</button>
      </footer>
    </div>
  );
}

export default App;
