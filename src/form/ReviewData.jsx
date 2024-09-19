import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReviewData = () => {
    const navigate = useNavigate()
    
    const backToAddressInfo = () => {
        navigate("/addressInfo")
    }
    return (
      <div>ReviewData
          <button onClick={backToAddressInfo}>Back</button>
    </div>
  )
}

export default ReviewData