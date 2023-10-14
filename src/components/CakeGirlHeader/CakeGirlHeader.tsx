import React from 'react'
import './CakeGirlHeader.css'
import { AuthContext } from "../../context/AuthContext";

const CakeGirlHeader = () => {
  const { header } = React.useContext(AuthContext);
  
  return (
    <div>
        <img className="header-img" src={header} alt="header" />
    </div>
  )
}

export default CakeGirlHeader