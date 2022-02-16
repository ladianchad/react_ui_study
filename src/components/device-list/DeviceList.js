import { useState } from "react"
import { DeviceSmallContainer } from "./device-small-container/DeviceSmallContainer"
import './DeviceList.css'
import axios from "axios"
import { useInterval } from "../../util/useInterval"
export const DeviceList = (props) =>{
  const [devices, setDevices] = useState([]);
  
  useState(()=>{
    axios.get("http://study-fianl.lachani.com/v1/devices",{headers:{
      "Contents-type": "application/json"
    }}).then(res => {
      setDevices(res.data)
    })
  }, null);
  
  useInterval(() => {
    axios.get("http://study-fianl.lachani.com/v1/devices",{headers:{
      "Contents-type": "application/json"
    }}).then(res => {
      setDevices(res.data)
    });
  },200);

  const createDeviceContainers = () => {
    return devices.map(device => {
      return(
        <DeviceSmallContainer id={device.id} key={device.id} data={device} onClick={props.onClick}></DeviceSmallContainer>
      )
    })
  }
  return(
    <div className="DeviceList">
     {createDeviceContainers()} 
    </div>
  )
}