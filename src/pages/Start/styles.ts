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

export const CardContainer = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    height: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})(Card)

export const FormContainer = withStyles({
  root: {
    display: 'flex',
    height: 200,
    width: '95%',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
})(Container)

export const SubmitButton = withStyles({
  root: {
    width: '10%',
    height: 50,
    margin: '0 15px',
    padding: '7px 0',
  },
})(Button)
