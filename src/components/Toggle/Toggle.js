import React, {useState} from "react"
import "./Toggle.css"

const Toggle = ({setPrice}) => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
    setPrice(() => !toggle)
    console.log(toggle.toString())
  }

  return (
    <div className="toggle-container" onClick={handleToggle} style={{justifyContent: !toggle ? "" : "flex-end"}}>
      <div className={`toggle-handle`}></div>
    </div>
  )
}

export default Toggle
