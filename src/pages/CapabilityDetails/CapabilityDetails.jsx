import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const CapabilityDetails = (props) => {
  const [capabilityDetails, setCapabilityDetails] = useState({})
  const location = useLocation()
 
  return (
    <div>{location.state.description}</div>
  )
}

export default CapabilityDetails