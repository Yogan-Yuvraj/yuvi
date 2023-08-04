import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import './icons.css'

const Icons = () => {
  return (
    <div className='iconeh'>
       <a className='faceah'><FaFacebook/></a>
       <a className='instaeh'><FiInstagram/></a>
       <a className='whatseh'><BsWhatsapp/></a>

    </div>
  )
}

export default Icons