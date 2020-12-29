import React, { useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { ComicsDto } from 'src/pages/Comics/Comics.dto'

import { BackButton, Description, HeroContainer, TextContainer, Title } from './styles'

const ComicsDetails: React.FC = () => {
  const { state } = useLocation<ComicsDto>()
  const { title, thumbnail, description } = state
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
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
    </HeroContainer>
  )
}

export default ComicsDetails
