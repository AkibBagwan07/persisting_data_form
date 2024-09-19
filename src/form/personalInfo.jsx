import React, { useEffect, useState } from 'react'
import styles from "./personalInfo.module.css"
import { json, useNavigate } from 'react-router-dom'

const PersonalInfo = () => {
  const navigate = useNavigate()

  const [fullName,setFullName] = useState("")
  const [email,setEmail] = useState("")
  const [phone, setPhone] = useState("")
  // const [dataofSessionStorage,setDataOfSessionStorage] = useState()
  // console.log(dataofSessionStorage)
  
  const navigateToAddressInfo = () => { 
    if (fullName !== "" && email !== "" && phone !== "") {
      let obj = {
        Name: fullName,
        Email: email,
        Phone: phone
      }
      localStorage.setItem("userInfo", JSON.stringify(obj))
      navigate("/addressInfo")
    }
  }

  useEffect(() => { 
     let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setFullName(userInfo?.Name)
    setEmail(userInfo?.Email)
    setPhone(userInfo?.Phone)
  }, [])
  
   //console.log(fullName,email,phone)
  
  //  let userInfo
  
  //  const getData = () => { 
  //   userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //   setFullName(userInfo.Name)
  //   setEmail(userInfo.Email)
  //   setPhone(userInfo.Phone)
  //  }
  
  return (
    <div>
      <h1>Fill in all Details</h1>
      <div>
        <label htmlFor="fullName">
          Name
        </label>
        <input value={fullName} onChange={(e)=>setFullName(e.target.value)} name="fullName" id='fullName' required type="text" />
      </div>
      <div>
        <label htmlFor="email">
          Email
        </label>
        <input value={email} name='email' onChange={(e)=>setEmail(e.target.value)} id='email' required type="text" />
      </div>
      <div>
        <label htmlFor="Phone">
          Phone
        </label>
        <input  value={phone} name='phone' id='Phone' onChange={(e)=>setPhone(e.target.value)} required type="text" />
      </div>
      <button onClick={navigateToAddressInfo}>Next</button>
    </div>
  )
}

export default PersonalInfo