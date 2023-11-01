import React, {useState} from "react"
import "./Toggle.css"

const Toggle = ({}) => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="toggle-container" onClick={() => setToggle(!toggle)}>
      <div className={`toggle-btn ${!toggle ? "inactive" : "active"}`}></div>
    </div>
  )
}

export default Toggle
