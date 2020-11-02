import React from 'react'
import './FormInput.scss'

interface MyProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value: string;
  name: string;
  type: string;
  required: boolean;
}

const FormInput: React.FunctionComponent<MyProps> = ({ handleChange, label, ...inputProps}) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...inputProps}/>
      {
        label && (
        <label className={`${inputProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>)
      }
    </div>
  )
}

export default FormInput
