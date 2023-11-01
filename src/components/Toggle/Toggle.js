import React, {useState} from "react"
import "./Toggle.css"
import {motion} from "framer-motion"

const Toggle = data => {
  const [toggle, setToggle] = useState(false)

  const changeForm = data => {
    setToggle(!toggle)
    data = toggle.toString()
    console.log(data)
  }

  return (
    <motion.div className="toggle-container" onClick={changeForm} style={{justifyContent: !toggle ? "flex-end" : "flex-start"}}>
      <motion.div className="toggle-handle"></motion.div>
    </motion.div>
  )
}

export default Toggle
