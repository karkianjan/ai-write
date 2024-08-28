


const DashboardHeader= () => {
  


  const items = dashboardSidebarItems.flatMap((item) => item.subMenus || []);

  return (
    <>
      <div className="top-0 z-10 flex w-full items-center justify-between gap-8 bg-dashboard px-6 py-3.5 lg:gap-28">
      <h1 className="hidden shrink-0 text-2xl font-semibold text-dark lg:block">
         Plan
      </h1>
    

      </div>
      
    </>
  )
};

export default DashboardHeader;
