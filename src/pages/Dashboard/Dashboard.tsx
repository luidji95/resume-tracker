import React from 'react'
import "./dashboard.css";
import { Topbar } from '../../features/components/Topbar';
import { Sidebar } from '../../features/components/Sidebar';
import { KanbanBoard } from '../../features/components/KanbanBoard';

const Dashboard = () => {
  return (

    <div className='dashboard-shell'>
        <Sidebar/>

        <main className='dashboard-content'>
            <Topbar/>
            <KanbanBoard/>
        </main>
    </div>
    
    
  )
}

export default Dashboard