import React from 'react'
import Header from '@/components/services/Header'
import Breadcrumb from '@/components/services/Breadcrumb'
import BookingTable from '@/components/services/BookingTable'
import Services from '@/components/services/Services'
import ServiceFeatures from '@/components/services/ServiceFeatures'

const page = () => {
  return (
    <div>
       <Header />
          <Breadcrumb />
          <Services />
          <ServiceFeatures/>
          <BookingTable />
          
          
    </div>
  )
}

export default page