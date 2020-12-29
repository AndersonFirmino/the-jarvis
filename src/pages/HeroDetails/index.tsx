import React, { useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { StartDto } from 'src/pages/Start/Start.dto'

import { Description, HeroContainer, Name, TextContainer, BackButton } from './styles'

const HeroDetails: React.FC = () => {
  const { state } = useLocation<StartDto>()
  const { name, thumbnail, description } = state
  const history = useHistory()

  const handleBackButton = useCallback(() => {
    history.goBack()
  }, [])

  return (
    <HeroContainer thumbnail={thumbnail.path + '.' + thumbnail.extension}>
      <TextContainer>
        <BackButton color="primary" variant="contained" onClick={handleBackButton}>
          Voltar
        </BackButton>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </TextContainer>
    </HeroContainer>
  )
}

export default HeroDetails
