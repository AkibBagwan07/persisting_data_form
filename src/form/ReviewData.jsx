import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ReviewData = () => {
    const navigate = useNavigate()
  const [usersStoredInfo, setUsersStoredInfo] = useState()
  const [usersAddressInfo, setUsersAddressInfo] = useState()
  

    const backToAddressInfo = () => {
        navigate("/addressInfo")
  }
  
  useEffect(() => { 
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUsersStoredInfo(userInfo)
    let userAddressInfo = JSON.parse(localStorage.getItem("userAddressInfo"));
    setUsersAddressInfo(userAddressInfo)
  },[])

  const submitData = () => { 
    alert("Your Response is been Recorded")
    localStorage.clear()
    navigate("/")
  }
    console.log(usersAddressInfo,usersStoredInfo)

    return (
      <div>
        <h1>Confirm all details and submit</h1> 
        <p>Name - { usersStoredInfo?.Email}</p>
        <p>Email - { usersStoredInfo?.Name}</p>
        <p>Mobile no - { usersStoredInfo?.Phone}</p>
        <p>Address line 1:-{ usersAddressInfo?.Address1}</p>
        <p>Address line 2:-{ usersAddressInfo?.Address2}</p>
        <p>City :- { usersAddressInfo?.City}</p>
        <p>State:-{ usersAddressInfo?.State}</p>
        <p>Zip code:-{ usersAddressInfo?.ZipCode}</p>
        <button onClick={backToAddressInfo}>Back</button>
        <button onClick={submitData}>Submit</button>
      </div>
  )
}

export default ReviewData