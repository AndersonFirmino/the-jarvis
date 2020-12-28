import { TextField as MTextField, Typography, withStyles } from '@material-ui/core'

import Container from '../Container'

export const TextField = withStyles({
  root: {},
})(MTextField)

export const Error = withStyles((theme) => ({
  root: {
    color: theme.palette.error.main,
    marginTop: 4,
  },
}))(Typography)

export const InputContainer = withStyles(() => ({
  root: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}))(Container)
