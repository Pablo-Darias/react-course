import React from 'react'
import styled from 'styled-components'

import { Monster } from '../../typings/index'

interface MyProps {
  monster: Monster
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -mox-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.05)
  }
`

export const Card: React.FunctionComponent<MyProps> = ({ monster }) => {
  return (
    <StyledCard>
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h1>{monster.name}</h1>
      <p>{monster.email}</p>
    </StyledCard>
  )
}
