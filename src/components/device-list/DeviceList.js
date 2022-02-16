import { useState } from "react"
import { DeviceSmallContainer } from "./device-small-container/DeviceSmallContainer"
import './DeviceList.css'
import axios from "axios"

export const DeviceList = (props) =>{
  const [devices, setDevices] = useState([])
  useState(()=>{
    axios.get("http://study.lachani.com/v1/devices",{headers:{
      "Contents-type": "application/json"
    }}).then(res => {
      setDevices(res.data)
    })
  })

  const createDeviceContainers = () => {
    return devices.map(device => {
      return(
        <DeviceSmallContainer key={device.id} data={device}></DeviceSmallContainer>
      )
    })
  }
  return(
    <div className="DeviceList">
     {createDeviceContainers()} 
    </div>
  )
}