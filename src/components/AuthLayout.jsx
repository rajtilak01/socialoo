import React from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from "react-router-dom"
const Protected = ({children, authentication = true}) => {
  return (
   <>{children}</>
  )
}

export default Protected