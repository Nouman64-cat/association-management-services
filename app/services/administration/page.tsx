import { AdministrationServices, ServicesOverview } from '@/app/components/serivces-page'
import React from 'react'

const page = () => {
  return (
    <div className='font-axiforma'>
      <ServicesOverview />
      <AdministrationServices />
    </div>
  )
}

export default page