### Initital Thoughts
- Since features and their sub-features are arbitrarily nested, a recursive approach seems to me the most logical.

- I am making the assumption that the data returned from the server will have following structure:

``` javascript
[
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

```