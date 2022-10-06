import { ThemeContext } from '@emotion/react'
import { createTheme } from '@mui/material/styles'

const blueJeans= "#00aaffff"
const corn= "#e7e247ff"
const blackOlive= "#3d3b30ff"
const independence= "#4d5061ff"
const beige= "#e9eddeff"

export default createTheme({
  palette: {
    common: {
      blue: `${blueJeans}`,
      yellow: `${corn}`
    },
    primary: {
      main: `${blueJeans}`
    },
    secondary: {
      main: `${corn}`
    }
  },
  overrides: {
    Button: {
      contained: {
        color: 'white',
      }
    }
  }
})



