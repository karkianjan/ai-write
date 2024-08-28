import { Suspense } from 'react';
// Assets
// Components
import Sidebar from '../organisms/Sidebar';
import NavbarHeader from '../organisms/NavBar/NavbarHeader/NavbarHeader';
import DashoardBody from '@/Views/Dashboard/DashboardBody';
const DashboardLayout = () => {
  return (
    <div className="flex ">
   
      <Sidebar />
      
      <div className='flex flex-1 flex-col '>
      <NavbarHeader/>
      <DashoardBody />
    
      
      </div>
    
      
      {/* Main */}
      <div className="">
        <Suspense fallback={<h1>LOADING...</h1>}/>
      </div>
    </div>
  );
};

export default DashboardLayout;
