import { Button } from "@/components/ui/button";



 const DashoardBody = () => {

    const handleClick = () => {

    }



    return(
        <>
        <div className="pl-[73px] pt-[74px] pr-[73px] ">

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





        </div>
        
        </>
    )
 }
 

 export default DashoardBody;