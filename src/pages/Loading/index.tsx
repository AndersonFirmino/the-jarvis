import React from 'react'

import { ImageContainer, LoadingContainer, LoadingText } from './styles'

const Loading: React.FC = () => (
  <LoadingContainer>
    <ImageContainer />
    <LoadingText>Carregando... aguarde</LoadingText>
  </LoadingContainer>
)

export default Loading
