import './DeviceSmallContainer.css'

export const DeviceSmallContainer = (props) => {
  return (
    <div className="DeviceSmallContainer">
      <p className="id">ID : {props.data.id}</p>
      <p className="data">value : {props.data.value || "none"}</p>
      <p className="data">command : {props.data.commnad || "none"}</p>
    </div>
  )
}