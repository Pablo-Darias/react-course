import React from 'react'
import styled from 'styled-components'

import { Card } from './Card'

import { Monster } from '../../typings/index'

interface MyProps {
  monsters: Monster[];
}

const StyledCardList = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px
`

export const CardList: React.FunctionComponent<MyProps> = ({ monsters }) => {
  return (
    <StyledCardList>
      {
          monsters.map((monster: Monster) => <Card monster={monster} key={monster.id} />)
      }
    </StyledCardList>
  )
}
