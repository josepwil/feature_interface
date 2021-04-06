import "../App.scss"
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import Checkbox from '../Checkbox'


storiesOf("Checkbox", module)
  .add("Base", () => (
    <Checkbox selected={true} label={'hi'} cost={5} onChange={() => console.log('changed')}/>
  ))

