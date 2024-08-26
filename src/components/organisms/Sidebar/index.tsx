import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
// Assets
import { dashboardSidebarItems } from '@/constants/dashboardSideBar';
import HamburgerMenu from '@/components/atom/HamburgerMenu/HamburgerMenu';
// Components
import { Button } from '@/components/ui/button';
import Logo from '@/components/atom/icons/logo';
import Arrow from '@/components/atom/icons/arrow';

const Sidebar = () => {
  const [submenu, setSubmenu] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const toolsRef = useRef<HTMLDivElement | null>(null);

  const isMobile = window.innerWidth <= 768;

  const handleMobileSidebar = () => {
    setMobileSidebar(!mobileSidebar);
  };

  useOutsideClickHandler(toolsRef, () => {
    setSubmenu(false);
  });

  const location = useLocation();
  const isInnerPages = /^\/[^/]+\/[^/]+$/.test(location.pathname);

  const [filteredItems, setFilteredItems] = useState(dashboardSidebarItems);
  const userInfo = useAppSelector((state) => state.userState.user);
  const role = userInfo?.details.role;

  // To know if submenu is active or not
  const submenulink = filteredItems.flatMap((item) => item.subMenus);
  const isSubmenuLinkActive = submenulink.some((submenu) => {
    return submenu && location.pathname.includes(submenu.link);
  });

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const { logout } = useLogOut();
  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (role && role.toLowerCase() === 'submember') {
      const newSidebarItems = reject(dashboardSidebarItems, function (item) {
        return (
          item.text === 'Permissions' ||
          item.text === 'Logout'
        );
      });
      setFilteredItems(newSidebarItems);
    } else if (role && role.toLowerCase() === 'subadmin') {
      const newSidebarItems = reject(dashboardSidebarItems, function (item) {
        return item.text === 'Logout';
      });
      setFilteredItems(newSidebarItems);
    }
  }, [userInfo]);

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
      <HamburgerMenu onClick={handleMobileSidebar} />
      <div
        className={classNames(
          'flex h-screen flex-col border-r border-light bg-white transition-all duration-200 ease-linear md:shrink-0',
          !isInnerPages && sidebarOpen ? 'w-60' : 'w-[87px]',
          isMobile && mobileSidebar ? 'flex' : 'hidden md:flex'
        )}
      >
        <div className="relative z-50 my-1.5 flex items-center justify-center p-4">
          <NavLink to="/">
            {!isInnerPages && sidebarOpen ? <Logo /> : <SmallLogo />}
          </NavLink>
          <Button
            onClick={handleSidebarOpen}
            variant="naked"
            className={classNames(
              'absolute -right-3 z-20 flex border border-gray-darkish bg-white text-black',
              sidebarOpen ? 'rotate-90' : '-rotate-90',
              isInnerPages && 'hidden',
              isMobile && 'hidden'
            )}
          >
            <span className="h-1 w-3">
              <Arrow />
            </span>
          </Button>
        </div>
        <ul
          className={classNames(
            'flex flex-1 flex-col gap-1.5 p-4 pt-2',
            sidebarOpen && !isInnerPages ? 'overflow-auto' : ''
          )}
        >
          {filteredItems.map((dashboardSidebarItems, index) => (
            <li
              key={dashboardSidebarItems.id}
              className={classNames(
                'group relative',
                index === 5 && 'mt-auto',
                index === 4 && 'mb-14'
              )}
            >
              {dashboardSidebarItems.link !== undefined ? (
                <NavLink
                  to={dashboardSidebarItems.link}
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
                      'flex items-center gap-4 rounded-md p-3 font-medium hover:bg-green-light'
                    )
                  }
                >
                  <span className="">
                    <dashboardSidebarItem.icon />
                  </span>
                  <span
                    className={classNames(
                      !isInnerPages && sidebarOpen ? 'block' : 'hidden'
                    )}
                  >
                    {dashboardSidebarItems.text}
                  </span>
                  {dashboardSidebarItems.subMenus && (
                    <div>
                      <Arrow />
                    </div>
                  )}
                </NavLink>
              ) : (
                <>
                  {submenu && !sidebarOpen && (
                    <div className="fixed inset-0 z-40" />
                  )}
                  {dashboardSidebarItems.text === 'Permissions' ? (
                    <div
                      ref={!isInnerPages && sidebarOpen ? null : toolsRef}
                      className="group"
                    >
                      <Button
                        type="button"
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
                          <dashboardSidebarItems.icon />
                        </span>
                        <span
                          className={classNames(
                            'text-base',
                            !isInnerPages && sidebarOpen ? 'block' : 'hidden'
                          )}
                        >
                          {dashboardSidebarItems.text}
                        </span>
                        <span
                          className={classNames(
                            'ml-auto w-2.5 origin-center transition-all duration-300 ease-in-out',
                            submenu ? 'rotate-180' : 'rotate-0',
                            !isInnerPages && sidebarOpen ? 'block' : 'hidden'
                          )}
                        >
                          {dashboardSidebarItems.subMenus && <Arrow />}
                        </span>
                      </Button>
                      {submenu && dashboardSidebarItems.subMenus && (
                        <ul
                          className={classNames(
                            !isInnerPages && sidebarOpen
                              ? 'static ml-3 mt-3 flex flex-col gap-2'
                              : 'absolute left-[130%] top-0 z-50 max-w-60 rounded-xl border border-input bg-white shadow-toolsDropdown'
                          )}
                        >
                          {dashboardSidebarItems.subMenus?.map((submenu) => (
                            <li
                              key={submenu.link}
                              className={classNames(
                                'capitalize hover:text-primary',
                                !isInnerPages && sidebarOpen
                                  ? ''
                                  : 'mx-1 py-1'
                              )}
                            >
                              <NavLink
                                to={submenu.link}
                                className={({ isActive }) =>
                                  twMerge(
                                    classNames(
                                      'flex items-center gap-3 rounded-lg p-3 text-sm font-medium hover:bg-green-light',
                                      isActive
                                        ? 'bg-green-light text-primary'
                                        : 'text-gray-secondary',
                                      !isInnerPages && sidebarOpen
                                        ? ''
                                        : 'py- px-3'
                                    )
                                  )
                                }
                              >
                                <span className="shrink-0">
                                  <submenu.icon />
                                </span>
                                <span className="truncate">
                                  {submenu.text}
                                </span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Button
                      type="button"
                      variant="naked"
                      className={classNames(
                        'flex w-full items-center gap-3 p-3 font-medium text-gray-secondary hover:bg-green-light',
                        !sidebarOpen || isInnerPages
                          ? 'justify-center'
                          : 'justify-start'
                      )}
                      onClick={handleLogout}
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
                    </Button>
                  )}
                </>
              )}
              {(!sidebarOpen || isInnerPages) && !submenu && (
                <div className="absolute left-[126%] top-[47%] z-50 hidden w-max origin-left -translate-y-[50%] scale-0 select-none items-center text-xs font-medium text-white transition-all duration-300 ease-in-out hover:hidden group-hover:flex group-hover:scale-100 group-has-[li]:hidden">
                  <div className="-mr-1.5 h-fit w-0 -rotate-90 border-b-8 border-l-8 border-r-8 border-transparent border-b-gray" />
                  <span className="w-full rounded border border-gray-300 bg-gray px-3 py-1 shadow-md">
                    {dashboardSidebarItem.text}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
