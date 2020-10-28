import React from 'react'
import styled from 'styled-components'

const StyledSearchField = styled.input`
  --webkit-appearance: none;
  border: none;
  outline: none;
  padding: 10px;
  width: 150px;
  line-height: 30px;
  margin-bottom: 30px;
`

interface MyProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchField: React.FunctionComponent<MyProps>= ({ handleChange }) => {
  return (
    <StyledSearchField
      type="text"
      placeholder="Search your monster"
      onChange={(e) => handleChange(e)}
    />
  )
}
