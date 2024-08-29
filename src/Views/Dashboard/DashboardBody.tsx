import { Button } from "@/components/ui/button";



 const DashoardBody = () => {

    const handleClick = () => {

    }



    return(
        <>
        <div className="pl-10 pt-10 pr-10 2xl:pl-16 2xl:pt-16 2xl:pr-16 ">

        <div className="flex justify-between pl- h-[90px] bg-gray-200 items-center">
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

        <div className="flex bg-gray-200 h-fit ">
            <div className="grid grid-cols-3 w-fit gap-[2px] ">
                 <div className="bg-red-500 mt-[45px] ml-[108px] h-[383px] w-[383px]"></div>
                 <div className="bg-blue-400  mt-[45px] p-4 h-[400px] w-[381px]"></div>
                 <div className="bg-green-300  mt-[45px] p-4  h-[400px] w-[383px]"></div>
             <p className="text-xs flex flex-col leading-none">
            <span className="text-base font-semibold text-light">
              <sup>$0</sup>
            </span>
            <span className="text-2xl font-semibold text-dark">
            FREE
            </span>
        </p> 

        </div> 
        </div>



        </div>
        
        </>
    )
 }
 

 export default DashoardBody;