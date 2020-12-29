import { Button, Typography, withStyles } from '@material-ui/core'

import { Container } from 'src/components'

export const HeroContainer = withStyles({
  root: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundImage: (props: { thumbnail: string }) => `url(${props.thumbnail})`,
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundBlendMode: 'darken',
    backgroundSize: 'cover',
  },
})(Container)

export const Title = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    fontSize: 62,
  },
}))(Typography)

export const Description = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    fontSize: 27,
    marginLeft: 15,
  },
}))(Typography)

export const TextContainer = withStyles(() => ({
  root: {
    width: '80%',
    display: 'flex',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}))(Container)

export const BackButton = withStyles({
  root: {
    width: '15%',
    height: 50,
    margin: '0 15px',
    padding: '7px 0',
  },
})(Button)
