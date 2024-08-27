import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// Assets
import { dashboardSidebarItems } from '@/constants/dashboardSideBar';
import { classNames } from '@/utils/ClassNames';
import { twMerge } from 'tailwind-merge';
import Arrow from '@/components/atom/icons/arrow';
import { Button } from '@/components/ui/button';
import Logo from '@/components/atom/icons/logo';
import SmallLogo from '@/components/atom/icons/SmallLogo';

interface SubMenuItem {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  link: string;
}

interface DashboardSidebarItem {
  id: number;
  text: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
  subMenus?: SubMenuItem[];
}

const Sidebar = () => {
  const [submenu, setSubmenu] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [filteredItems, setFilteredItems] = useState<DashboardSidebarItem[]>([]);

  const toolsRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const isInnerPages = /^\/[^/]+\/[^/]+$/.test(location.pathname);

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Filtering Logic: Customize this based on your needs
  useEffect(() => {
    const filtered = dashboardSidebarItems.filter(item => {
    
      return item.text !== 'Admin';
    });

    setFilteredItems(filtered);
  }, []); 

  // To know if submenu is active or not
  const submenulink = filteredItems.flatMap((item) => item.subMenus);
  const isSubmenuLinkActive = submenulink.some((submenu) => {
    return submenu && location.pathname.includes(submenu.link);
  });

  useEffect(() => {
    if (!sidebarOpen || isInnerPages) {
      setSubmenu(false);
    }
    if (isSubmenuLinkActive && sidebarOpen) {
      setSubmenu(true);
    }
    return () => {
      setSubmenu(false);
    };
  }, [location.pathname, sidebarOpen, isSubmenuLinkActive]);

  return (

<>
<div
        className={classNames(
          'flex pl-5 pt-3 h-screen flex-col border-r border-light bg-white transition-all duration-200 ease-linear md:shrink-0',
          !isInnerPages && sidebarOpen ? 'w-60' : 'w-[87px]',
          
        )}
      >

        <div className="relative z-50 my-1 ">
          <NavLink to="/">
            {!isInnerPages && sidebarOpen ? <Logo/> : <SmallLogo />}
          </NavLink>
          <Button
            onClick={handleSidebarOpen}
         
            className={classNames(
              'absolute -right-3 z-20 flex border border-gray-darkish bg-white text-black',
              sidebarOpen ? 'rotate-90' : '-rotate-90',
              isInnerPages && 'hidden',
              
            )}
          >
            <span className="h-1 w-3">
              <Arrow />
            </span>
          </Button>
        </div>

    <ul>
      {filteredItems.map((dashboardSidebarItem, index) => (
        <li
          key={dashboardSidebarItem.id}
          className={classNames(
            'group relative',
            index === 1 && 'mt-auto',
            index === 4 && 'ml-0',
            index === 5 && 'ml-0'

          )}
        >
          {dashboardSidebarItem.link !== undefined ? (
            <NavLink
              to={dashboardSidebarItem.link}
              className={({ isActive }) =>
                twMerge(
                  classNames(
                    isActive
                      ? 'bg-green-light text-primary'
                      : 'text-gray-secondary',
                    !sidebarOpen || isInnerPages
                      ? 'justify-center'
                      : 'justify-start'
                  ),
                  'flex items-center gap-4 rounded-md p-3 font-medium hover:bg-green-300'
                )
              }
            >
              <span>
                <dashboardSidebarItem.icon />
              </span>
              <span className={classNames(
                !isInnerPages && sidebarOpen ? 'block' : 'hidden'
              )}>
                {dashboardSidebarItem.text}
              </span>
              {dashboardSidebarItem.subMenus && (
                <div>
                  <Arrow />
                </div>
              )}
            </NavLink>
          ) : (
            <>
              {submenu && !sidebarOpen && (
                <div className='fixed inset-0 z-40' />
              )}
              {dashboardSidebarItem.text === 'Tools' ? (
                <div
                  ref={!isInnerPages && sidebarOpen ? null : toolsRef}
                  className='group'
                >
                  <Button
                    type='button'
                    className={classNames(
                      'flex w-full items-center gap-3 p-3 font-medium text-gray-secondary hover:bg-green-light',
                      isSubmenuLinkActive
                        ? 'bg-green-light text-primary'
                        : 'bg-white'
                    )}
                    onClick={() => {
                      setSubmenu(!submenu);
                    }}
                  >
                    <span>
                      <dashboardSidebarItem.icon />
                    </span>
                    <span
                      className={classNames(
                        'text-base',
                        !isInnerPages && sidebarOpen ? 'block' : 'hidden'
                      )}
                    >
                      {dashboardSidebarItem.text}
                    </span>
                    <span
                      className={classNames(
                        'ml-auto w-2.5 origin-center transition-all duration-300 ease-in-out',
                        submenu ? 'rotate-180' : 'rotate-0',
                        !isInnerPages && sidebarOpen ? 'block' : 'hidden'
                      )}
                    >
                      {dashboardSidebarItem.subMenus && <Arrow />}
                    </span>
                  </Button>
                </div>
              ) :null}
            </>
          )}
        </li>
      ))}
    </ul>
    </div>
    </>
  );

};




export default Sidebar;
