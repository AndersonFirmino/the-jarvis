import React from 'react'
import { useLocation } from 'react-router-dom'

import { StartDto } from 'src/pages/Start/Start.dto'

import { Description, HeroContainer, Name, TextContainer } from './styles'

const HeroDetails: React.FC = () => {
  const { state } = useLocation<StartDto>()
  const { name, thumbnail, description } = state

  console.log(state)

  return (
    <HeroContainer thumbnail={thumbnail.path + '.' + thumbnail.extension}>
      <TextContainer>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </TextContainer>
    </HeroContainer>
  )
}

export default HeroDetails
