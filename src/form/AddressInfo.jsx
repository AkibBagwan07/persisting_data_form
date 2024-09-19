import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddressInfo = () => {
    const navigate = useNavigate()

    const navigateToReviewData = () => { 
        navigate("/reviewData")
    }
    
    const backToPersonalInfo = () => { 
        navigate("/")
    }
    
    const [addressData, setAddressData] = useState({
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode:""
    })
    
  //console.log(addressData)
  
    

    const handleData = (e) => { 
        setAddressData({
            ...addressData,
            [e.target.id] : e.target.value
        })
    }

  return (
    <div>
      <h1>Fill in all Details</h1>
      <div>
        <label htmlFor="address1">
          Address Line 1
        </label>
        <input onChange={handleData} id='address1' required type="text" />
      </div>
      <div>
        <label htmlFor="address2">
          Address Line 2
        </label>
        <input onChange={handleData} id='address2' required type="text" />
      </div>
      <div>
        <label htmlFor="city">
          City
        </label>
        <input onChange={handleData} id='city' required type="text" />
          </div>
          <div>
        <label htmlFor="state">
          State
        </label>
        <input onChange={handleData} id='state' required type="text" />
          </div>
          <div>
        <label htmlFor="zipCode">
          Zip Code
        </label>
        <input onChange={handleData} id='zipCode' required type="text" />
      </div>
          <div>
              <button onClick={backToPersonalInfo}>Back</button>
              <button onClick={navigateToReviewData}>Next</button>
      </div>

          </div>
  )
}

export default AddressInfo