import { Typography, withStyles } from '@material-ui/core'

import { Container } from 'src/components'

export const LoadingContainer = withStyles({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    background: 'rgb(25,25,25)',
  },
})(Container)

export const ImageContainer = withStyles({
  root: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: 'url(/loading_iron_man.png) no-repeat center center',
  },
})(Container)

export const LoadingText = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    fontSize: 42,
    alignSelf: 'center',
    marginBottom: 25,
  },
}))(Typography)
