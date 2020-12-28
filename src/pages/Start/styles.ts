import { Button, Card, withStyles } from '@material-ui/core'

import { Container } from 'src/components'

export const StartContainer = withStyles({
  root: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0,0,0, .65) url(/wallpaper.jpg)',
    backgroundBlendMode: 'darken',
  },
})(Container)

export const Form = withStyles({
  root: {
    width: '275px',
    height: '275px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})(Card)

export const SubmitButton = withStyles({
  root: {
    width: '80%',
    margin: '15px',
    padding: '7px 0',
  },
})(Button)
