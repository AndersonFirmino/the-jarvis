import React from 'react'

import { ContainerStyle } from './styles'

const Container: React.FC = (props) => {
  const containerStyle = ContainerStyle(props)

  return <div className={containerStyle.root} />
}

export default Container
