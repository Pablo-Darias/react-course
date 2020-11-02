import React from 'react'
import './CustomButton.scss'

interface MyProps {
  children: React.ReactNode;
  type: string;
}

const CustomButton: React.FunctionComponent<MyProps> = ({ children, ...buttonProps }) => {
  return (
    <button className="custom-button">
      {children}
    </button>
  )
}

export default CustomButton
