import React from 'react'
import ClientTable from './ClientTable'
import ContactForm from './ContactForm'
import './Dashboard'
import Header from './Header'
import RecentActivities from './RecentActivities'
import Sidebar from './Sidebar'
import SocialTrafic from './SocialTrafic'
import StatisticCard from './StatisticCard'
import TaskSummeries from './TaskSummeries'
const Dashboard = ({headerContent}: any) => {
    return (
        

<div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
   <Header/>
 {/* Header */}


  {/* <!-- Sidebar --> */}
        <Sidebar />
  {/* <!-- ./Sidebar --> */}

  <div className="h-full ml-14 mt-14 mb-10 md:ml-64">

    {/* <!-- Statistics Cards --> */}
      <StatisticCard />
   {/* Statistics Cards */}

    <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">

      {/* <!-- Social Traffic --> */}
            <SocialTrafic/>
      {/* <!-- ./Social Traffic --> */}

      {/* <!-- Recent Activities --> */}
                <RecentActivities/>
      {/* <!-- ./Recent Activities --> */}
    </div>

    {/* <!-- Task Summaries --> */}
        <TaskSummeries/>
    {/* <!-- ./Task Summaries --> */}

    {/* <!-- Client Table --> */}
             <ClientTable/>
    {/* <!-- ./Client Table --> */}
         
    {/* <!-- Contact Form --> */}
        <ContactForm />
    {/* <!-- ./Contact Form --> */}


    {/* <!-- External resources --> */}
   
    {/* <!-- ./External resources --> */}
  </div>
</div>
    )
}

export default Dashboard
