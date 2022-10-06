import { Typography, Paper } from '@mui/material'
import { Link } from 'react-router-dom'

const CarouselCard = (props) => {
  return (
    <Link to={`/${props.capability.url}`}>
        <Paper sx={{height: "400px", width: "300px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", m: "2rem" }}>
          <Typography variant="h6">{props.capability.title}</Typography>
          <img src={props.capability.image} alt={props.capability.title} height={"250px"} width={"auto"}/>
        </Paper>
      </Link>
  )
}

export default CarouselCard