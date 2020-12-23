import { Typography, withStyles } from '@material-ui/core'

import { Container } from 'src/components'

export const NotFoundContainer = withStyles({
  root: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/hulk.jpg)',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundBlendMode: 'darken',
    backgroundSize: 'cover',
  },
})(Container)

export const NotFoundText = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    fontSize: 42,
    marginBottom: 25,
  },
}))(Typography)
