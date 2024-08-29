import { Notification } from "@/components/atom/icons/notification";


// Define an interface for sidebar items
interface NavbarHeaderItems {
    id: number;
    text: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>; 
    link: string;
}

const NavbarHeaderItems = [
 
    
    {
        id: 1,
        text:'Plan',
        icon: Notification,
        link: '/'

    },

   
    
]


export default NavbarHeaderItems;