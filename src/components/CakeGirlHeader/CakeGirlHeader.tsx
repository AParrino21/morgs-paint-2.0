import React from 'react'
import './CakeGirlHeader.css'

const CakeGirlHeader = () => {
  const sURL = import.meta.env.VITE_APP_MORGS_S_URL;
  return (
    <div>
        <img className="header-img" src={`${sURL}header/E0D75339-B83F-40BC-93CF-486F9DB5479C.jpeg`} alt="header" />
    </div>
  )
}

export default CakeGirlHeader