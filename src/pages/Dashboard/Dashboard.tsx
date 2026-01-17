
import "./dashboard.css";
import { Topbar } from '../../features/components/Topbar';
import { Sidebar } from '../../features/components/Sidebar';
import { KanbanBoard } from '../../features/components/KanbanBoard';

import { supabase } from "../../lib/supabaseClient";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [profile, setProfile] = useState<{
  userName: string | null;
} | null>(null);

useEffect(() => {
  const loadProfile = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) return;

    const { data } = await supabase
      .from("profiles")
      .select("userName")
      .eq("id", session.user.id)
      .single();

    setProfile(data);
  };

  loadProfile();
}, []);

  return (

    <div className='dashboard-shell'>
        <Sidebar/>

        <main className='dashboard-content'>
            <Topbar userName={profile}/>
            <KanbanBoard/>
        </main>
    </div>
    
    
  )
}

export default Dashboard