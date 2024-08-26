import { History } from "@/components/atom/icons/history";
import Logo from "@/components/atom/icons/logo";
import { MyProfile } from "@/components/atom/icons/myProfile";
import { Notification } from "@/components/atom/icons/notification";


export const dashboardSidebarItems = [
    {
        id: 1,
        text:'',
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
                icon:,
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
        text:'',
        icon: Notification,
        link: '/'

    },

    {
        id: 4,
        text:'',
        icon: MyProfile,
        link: '/'
    },

    {
        id: 5,
        text: 'Logout',
        link:'/',
        
    }
]