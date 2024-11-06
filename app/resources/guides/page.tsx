import { GuidesSection, ResourcesOverview } from '@/app/components/resources-page'
import React from 'react'

const page = () => {
  return (
    <div className='font-axiforma'>
      <ResourcesOverview />
      <GuidesSection />
    </div>
  )
}

export default page