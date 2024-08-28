import { MyProfile } from "@/components/atom/icons/myProfile";
import { Notification } from "@/components/atom/icons/notification";


// Define an interface for sidebar items
interface NavbarHeaderItems {
    id: number;
    text: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>; 
    link: string;
}

export const NavbarHeaderItems = [
 
    
    {
        id: 1,
        text:'Plan',
        icon: Notification,
        link: '/'

    },

    {
        id: 2,
        text:'Users',
        icon: MyProfile,
        link: '/'
    },

  

    {
        id: 3,
        text:'Logout',
        icon: MyProfile,
        link: '/'
    },

    
]
