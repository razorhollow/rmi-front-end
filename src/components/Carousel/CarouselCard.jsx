import { useState } from 'react'
import { Typography, Paper } from '@mui/material'
import { Link } from 'react-router-dom'

const CarouselCard = (props) => {
  const [mouseOver, setMouseOver] = useState(false)

  const handleMouseOver = (() => {
    setMouseOver(true)
  })
  const handleMouseOut = (() => {
    setMouseOver(false)
  })
  return (
    <Link 
      to={`/${props.capability.url}`}  
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut} state={props.capability}
      style={{ textDecoration: 'none' }}
    >
        <Paper elevation={mouseOver ? 6 : 1} sx={{height: "400px", width: "300px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", m: "2rem" }}>
          <Typography variant="h6">{props.capability.title}</Typography>
          <img src={props.capability.image} alt={props.capability.title} height={"250px"} width={"auto"}/>
        </Paper>
      </Link>
  )
}

export default CarouselCard