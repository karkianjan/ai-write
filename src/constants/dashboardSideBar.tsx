import { History } from "@/components/atom/icons/history";
import { MyProfile } from "@/components/atom/icons/myProfile";
import { Notification } from "@/components/atom/icons/notification";

// Define an interface for submenu items
interface SubMenuItem {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  link: string;
}

// Define an interface for sidebar items
interface dashboardSidebarItems {
  id: number;
  text: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
  subMenus?: SubMenuItem[];
}

export const dashboardSidebarItems = [
  {
    id: 1,
    text: "Permissions",
    icon: History,
    link: "/permissions",
    subMenus: [
      {
        icon: History,
        text: "Test1",
        link: "/",
      },
      {
        icon: History,
        text: "Test2",
        link: "/",
      },
    ],
  },

  {
    id: 2,
    text: "Plan",
    icon: Notification,
    link: "/plan",
  },

  {
    id: 3,
    text: "Users",
    icon: MyProfile,
    link: "/user",
  },
];

console.log(dashboardSidebarItems);
