import { ICheckbox } from './types'

const Checkbox: React.FC<ICheckbox> = ({selected, label}) => {
  return (
    <div>
      <div>
        onClick={() => console.log("i was clicked ", selected)}
      </div>
      <div>{label}</div>
    </div>
  )
}

export default Checkbox;