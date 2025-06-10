import React from 'react'
import Breadcrumb from '@/components/services/Breadcrumb'
import Services from '@/components/services/Services'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import BooktheHall from '@/components/Home/BooktheHall'

const page = () => {
  return (
    <div className='pb-16'>
      <Breadcrumb />
      <Services />
      <ServiceFeatures />
      <BooktheHall />
    </div>
  )
}

export default page