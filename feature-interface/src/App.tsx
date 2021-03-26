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
          cost: 20,
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
          cost: 30,
          subFeatures: []
        }
      ]
    },
    {
      name: 'Feature B',
      cost: 30,
      subFeatures: []
    },
    {
      name: 'Feature C',
      cost: 40,
      subFeatures: []
    }
  ]

  const [state, setState] = useState({
    selectedFeatures: {}
  })
  
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
        />
      </main>

      <footer>
        <h3>Total: $__ / mo</h3>
        <button>Save</button>
      </footer>
      
    </div>
  );
}

export default App;
