import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddressInfo = () => {
    const navigate = useNavigate()

    // const navigateToReviewData = () => { 
        
    // }
    
  const backToPersonalInfo = () => { 
      if (address1 !== "" && address2 !== "" &&  city !== "" && state !=="" && zipCode !== "") {
      let obj = {
        Address1: address1,
        Address2: address2,
        City: city,
        State: state,
        ZipCode : zipCode
      }
      localStorage.setItem("userAddressInfo", JSON.stringify(obj))
      navigate("/")
    }
    }
    
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState("")
    
  //console.log(addressData)
  
 const navigateToReviewData = () => { 
    if (address1 !== "" && address2 !== "" &&  city !== "" && state !=="" && zipCode !== "") {
      let obj = {
        Address1: address1,
        Address2: address2,
        City: city,
        State: state,
        ZipCode : zipCode
      }
      localStorage.setItem("userAddressInfo", JSON.stringify(obj))
      navigate("/reviewData")
    }
  }

  useEffect(() => { 
     let userAddressInfo = JSON.parse(localStorage.getItem("userAddressInfo"));
    setAddress1(userAddressInfo?.Address1)
    setAddress2(userAddressInfo?.Address2)
    setCity(userAddressInfo?.City)
    setState(userAddressInfo?.State)
    setZipCode(userAddressInfo?.ZipCode)
  }, [])
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      navigateToReviewData()
    }}>
      <h1>Fill in all Details</h1>
      <div>
        <label htmlFor="address1">
          Address Line 1
        </label>
        <input value={address1} onChange={(e)=>setAddress1(e.target.value)} id='address1' required type="text" />
      </div>
      <div>
        <label htmlFor="address2">
          Address Line 2
        </label>
        <input value={address2} onChange={(e)=>setAddress2(e.target.value)} id='address2' required type="text" />
      </div>
      <div>
        <label htmlFor="city">
          City
        </label>
        <input value={city} onChange={(e) =>setCity(e.target.value)} id='city' required type="text" />
          </div>
          <div>
        <label htmlFor="state">
          State
        </label>
        <input value={state} onChange={(e)=>setState(e.target.value)} id='state' required type="text" />
          </div>
          <div>
        <label htmlFor="zipCode">
          Zip Code
        </label>
        <input value={zipCode} onChange={(e)=>setZipCode(e.target.value)} id='zipCode' required type="text" />
      </div>
          <div>
              <button onClick={backToPersonalInfo}>Back</button>
              <button type='submit'>Next</button>
      </div>

          </form>
  )
}

export default AddressInfo