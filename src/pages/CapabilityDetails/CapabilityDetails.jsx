import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const CapabilityDetails = () => {
  const location = useLocation()
  return (
    <div>{location.state.capability.title}</div>
  )
}

export default CapabilityDetails