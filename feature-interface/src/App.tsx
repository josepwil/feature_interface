import { useState } from 'react';
import './App.css';

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
          cost: 0,
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
          cost: 0,
          subFeatures: []
        }
      ]
    },
    {
      name: 'Feature B',
      cost: 0,
      subFeatures: []
    },
    {
      name: 'Feature C',
      cost: 0,
      subFeatures: []
    }
  ]
  const [state, setState] = useState({
    selectedFeatures: {},
  })
  const [costs, setCosts] = useState(featureData.map(x => x.cost))
  const [totalCost, setTotalCost] = useState(0)


  return (
    <div className="App">
      <header>
        <h3>Subscription Preferences</h3>
      </header>

      <main>
        <FeaturesList 
          features={featureData}
          onChange={(selectedFeatures: any) => setState({selectedFeatures})}
          selectedFeatures={state.selectedFeatures}
          parent={null}
          costs={costs}
          updateCosts={(costs: number[]) => setCosts(costs)}
          setTotalCost={setTotalCost}
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
