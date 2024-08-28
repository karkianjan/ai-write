import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// Assets
// Components
import Sidebar from '../organisms/Sidebar';
const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar />
      {/* Main */}
      <div className="flex h-screen w-full flex-col">
        <Suspense fallback={<h1>LOADING...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardLayout;
