### Assumptations
- I made the assumption that the data returned from the server will have following structure:

``` javascript
[
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
```

### Implementation
![Walkthrough](https://github.com/josepwil/pani_energy/blob/main/walkthrough.gif)

### Decision Making Process
- Since features and their sub-features are arbitrarily nested, a recursive approach seemed to me the most logical.
- I recursively render a Checkbox component for each feature and its sub-features.
- I would keep track of the selected features in state at the root component and update this state whenever the selected features changed.
- I calculated the total monthly cost by flattening out the selected features object and summing the cost of those features, this was updated whenever the selected features changed.

### Considerations
- My implementation contains two recursive calls. One to display the sub features and since the selected features state mirrors the nested nature of the feature/sub-feature relationship another to calculate the total cost. 
- Whilst these seemed to be the most logical approach due to the nature of the sub-features being arbitrarily nested, there may be some implications for performance. I would be interested in spending some more time to see what a viable iterative approach would look like.

### Failings
- Whilst my implementation acheives the task set out in the 'Challenge' paragraph (feature’s sub-features only expand when selected on and only the leaves contribute to the overall
cost) it does fall short in that I was not able to correctly bubble up the sub-feature price through it's parents as shown in user-preferences.png.
- I was close on a number of occassions to successfully implementing this and I have left in some of the code with comments on the main issues. Given more time I believe I would have likely stumbled across the solution.
- I wanted to simply update the parents costs state from a child by passing a function as props. However I ran into trouble implementing this with the added complexity of recursion. 

### Styling
- I made use of SCSS to style the components using flexbox, styling can be found inside App.scss. 

### Testing
- I added a couple of simple tests to check that the features rendered correctly and that clicking on the checkbox for a feature would display it's subfeatures, these can be found in App.test.tsx.

### Running the project
- `cd` into `feature-interface`, run `yarn` to install the dependencies. Run `yarn start` and go to `http://localhost:3000/` to see the application. You can also run `yarn test` to run the test suite.

