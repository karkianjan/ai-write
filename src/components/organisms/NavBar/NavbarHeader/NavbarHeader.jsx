import { useState } from 'react';
import NavbarHeaderItems from '../NavbarHeader'







  
  interface NavbarHeaderItems {
    id: number;
    text: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    link: string;
  
  }
 export const  NavbarHeader = () => {
    const[filteredItems, setFilteredItems] = useState<NavbarHeaderItems[]>([]);



}




