import { useState, useEffect } from 'react';
import { classNames } from '@/utils/ClassNames';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import NavbarHeaderItems from '@/constants/NavbarHeaderItems';
import image from './image.jpg';

interface NavbarHeaderItem {
    id: number;
    text: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    link: string;
}

export const NavbarHeader = () => {
    const [filteredItems, setFilteredItems] = useState<NavbarHeaderItem[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const filtered = NavbarHeaderItems.filter(item => item.text !== 'Admin');
        setFilteredItems(filtered);
    }, []);

    return (
        <div className="top-0 z-10 flex w-full h-[88px] bg-gray-100 items-center justify-between  px-6 py-3.5 lg:gap-28">
            <h1 className="hidden shrink-0 text-2xl font-semibold text-dark lg:block">
                Plan
            </h1>

            <div className='flex flex-row gap-6'>
            <div className='pt-2'>
               <ul className='flex flex-row gap-5 items-center ' >
                {filteredItems.map((item, index) => (
                    <li
                        key={item.id}
                        className={classNames(
                            'group relative flex flex-row' 
                            
                           
                        )}
                    >
                        <item.icon />
                     
                    </li>
                  ))}
                </ul>
              </div>

                <Button
                variant ="naked"
                onClick={() => navigate('/')}
                className="ml-auto min-w-0"
                >
                <div className="size-10 shrink-0 overflow-hidden rounded-full bg-inputBorder p-0">
                    <img src={image} alt="hey" className="object-cover" />
                </div>
              
                </Button>

              <div className='border-t-2 h-[45px] w-[2px] bg-gray-400 rotate90'>
                 
                 
                
              </div>

            <div>
                <Button
                    variant="ghost"
                    onClick={() => navigate('/some-path')}
                    className="ml-auto min-w-0"
                >
                    <div className="size-10 shrink-0 rounded-full bg-inputBorder p-0 flex justify-center items-center text-green-600">
                        Logout
                    </div>
                </Button>
            </div>
        </div>
        </div>
    );
}

export default NavbarHeader;
