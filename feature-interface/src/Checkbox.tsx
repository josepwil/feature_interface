import { ICheckbox } from './types'

const Checkbox: React.FC<ICheckbox> = ({selected, label, cost, onChange}) => {
  return (
    <div>
      <div 
      style={{width: '20px', height: '20px', backgroundColor: 'blue'}}
      onClick={() => onChange(!selected)} 
      />
      <div>{label} ({cost ? `$${cost}` : '-'})</div>
    </div>
  )
}

export default Checkbox;