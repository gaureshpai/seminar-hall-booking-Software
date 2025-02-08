import React from 'react'
import Breadcrumb from '@/components/about/Breadcrumb'
import AboutSection from '../../components/about/AboutSection'
import Facilities from '../components/Home/Facilities'

const page = () => {
  return (
    <div className='font-poppins'>
       <Breadcrumb/>
       <div className="justify-items-center">
        <AboutSection/>
       </div>
       <Facilities/>
    </div>
   
  )
}

export default page