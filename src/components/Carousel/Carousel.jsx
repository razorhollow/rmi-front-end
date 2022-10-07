import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import capabilities from './capabilities'
import CarouselCard from './CarouselCard'

const Carousel = () => {
  const [capabilityData, setCapabilityData] = useState(capabilities)

  return ( 
    <>
      <Box sx={{ width: "100%", py: "5rem", display: "flex", justifyContent: "space-around", flexWrap: "wrap",  }}>
        {capabilityData.map((capability,idx) => 
          <CarouselCard capability={capability} key={idx} />
        )}
      </Box>
    </>
  )
}

export default Carousel