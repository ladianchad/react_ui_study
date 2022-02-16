import './Index.css'

export const IndexItem = (props) => {
  return(
    <div className={`IndexItem-${props.on}`} onClick={props.onClick}>
      {props.name}
    </div>
  )
}