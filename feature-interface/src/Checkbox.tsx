import { ICheckbox } from './types';

const Checkbox: React.FC<ICheckbox> = ({selected, label, cost, onChange}) => {
  return (
    <div className='checkbox'>
      <div 
      data-testid='checkbox-id'
      className={'unchecked'}
      onClick={() => onChange(!selected)} 
      >
        {selected && <div className={'checked'} />}
      </div>
      <div>{label} ({cost ? `$${cost}` : '-'})</div>
    </div>
  )
};

export default Checkbox;