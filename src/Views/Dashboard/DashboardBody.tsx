import DashboardFeatures from "@/components/organisms/dashboard/DashboardHeader/DashboardFeatures";
import { Button } from "@/components/ui/button";



 const DashoardBody = () => {

    const handleClick = () => {

    }



    return(
        <>
        <div className=" p-10 2xl:p-16">

        <div className="flex justify-between h-20 xl:h-24 bg-gray-200 items-center">
            <h1 className="pl-[55px] h-6 text-bold  hidden shrink-0 text-2xl font-semibold text-dark lg:block">Our Plan</h1>
            
            <div className="pr-[28px] ">
            <Button
             size={'default'}
             variant='naked'
             className="h-11 px-6  py-2.5 text-md bg-green-600 text-white font-bold"
             onClick={handleClick}
             >
              Add Plan
              </Button>
              </div>

        </div>

        <div className="flex bg-gray-200 h- border rounded-md ">
            <div className="grid grid-cols-3 w-fit gap-7 ">
                
            <div className="bg-white mt-11 ml-24 px-6  py-6 2xl:h-[383px] 2xl:w-[383px]">
             <p className="text-xs flex flex-col leading-none py-4">
            <span className="text-base font-semibold text-light">
              <sup>$0</sup>
            </span>
            <span className="text-2xl font-semibold text-dark">
            FREE
            </span>
            <span>Dictum aliquet arcu egestas massa sed tellus sed arcu velit tincidunt orci.</span>
                  <div className='border-t-2 rounded h-[1px] w-[220px] bg-gray-400 rotate90'></div>
                
            
            </p> 
         
                <div className="mt-4 space-y-3 my-4 text-customGray ">
                <DashboardFeatures detail="Manage 1,000+ subs" status={true}/>
                <DashboardFeatures detail="10 landing pages" status={true}/>
                <DashboardFeatures detail="Customizable domain" status={true}/>
                <DashboardFeatures detail="15+ integrations" status={true}/>
                <DashboardFeatures detail="Basic support" status={true}/>
     
                </div>
               
            <div className='border-t-2 rounded h-[1px] w-[220px] bg-gray-400 rotate90'></div>
            <span>Dictum aliquet arcu egestas massa sed tellus sed arcu velit tincidunt orci.</span>


                 </div>
                 <div className="bg-white mt-[45px]  h-[400px] w-[381px]"></div>
                 <div className="bg-white  mt-[45px]  h-[400px] w-[383px]"></div>

        </div>

        </div>

        </div>

          
        
        </>
    )
 }
 

 export default DashoardBody;