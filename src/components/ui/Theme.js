import { createTheme } from '@mui/material/styles'

const arcBlue = "#0B7289"
const arcOrange = "#FFBA60"

export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      arcOrange: `${arcOrange}`
    },
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrange}`
    }
  }
})