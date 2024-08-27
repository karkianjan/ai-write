import { History } from "@/components/atom/icons/history";
import Logo from "@/components/atom/icons/logo";
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
        icon: Logo,
        link:'/'
    },

    {
        id: 2,
        text: 'Permissions',
        icon: History,
        link: '/',
        subMenus: [
            {
                icon: History,
                text: 'Plan',
                link:'/',
            },
            {
                icon: History,
                text:'Users',
                link: '/'
            }
        ]
    },

    {
        id: 3,
        text:'Plan',
        icon: Notification,
        link: '/'

    },

    {
        id: 4,
        text:'Users',
        icon: MyProfile,
        link: '/'
    },

    {
        id: 5,
        text: '',
        icon: Notification,
        link:'/',
    },

    // {
    //     id: 6,
    //     text:'',
    //     Icon: MyProfile,
    //     link: '/'
    // },
    {
        id: 7,
        text: 'Logout',
        icon: History,
        link:'/',
        
    }
]

console.log(dashboardSidebarItems);