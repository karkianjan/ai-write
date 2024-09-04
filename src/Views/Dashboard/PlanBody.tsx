import PlanFeatures from "@/components/organisms/dashboard/DashboardHeader/planFeatures";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddPlan from "@/components/AddPlan/AddPlan";
const PlanBody: React.FC = () => {
  return (
    <>
      <div className=" m-10 bg-customLightGray border rounded-lg h-full ">
        <div className="   xl:h-24  items-center">
          <div className="flex justify-between pt-6">
            <h1 className="pl-10 h-6 text-semibold  hidden shrink-0 text-2xl font-semibold text-dark lg:block">
              Our Plan
            </h1>
            <div className="pr-7">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size={"default"}
                    variant="naked"
                    className="h-11 px-6 py-2.5 text-md bg-customGreen  border-none text-white font-bold focus:outline-none"
                  >
                    Add Plan
                  </Button>
                </DialogTrigger>

                <AddPlan />
              </Dialog>
            </div>
          </div>
          <div className="flex bg-customLightGray  text-customGray pt-7 ">
            <div className=" grid-cols-3 flex justify-around flex-1  ">
              <div className="bg-white  px-6 ml-10 py-5 w-80 h-fit 2xl:h-[383px] 2xl:w-[383px] border rounded-md ">
                <div className="text-xs flex flex-col leading-none space-y-1">
                  <span className=" font-semibold text-xl">$0</span>
                  <span className="text-xl font-semibold text-dark">FREE</span>
                  <span>
                    Dictum aliquet arcu egestas massa sed tellus sed arcu velit
                    tincidunt orci.
                  </span>
                  <div className="border-t-2 rounded w-auto bg-gray-400 rotate90"></div>
                </div>

                <div className="mt-4 space-y-1.5 my-3 text-sm text-customGray ">
                  <PlanFeatures detail="Manage 1,000+ subs" status={true} />
                  <PlanFeatures detail="10 landing pages" status={true} />
                  <PlanFeatures detail="Customizable domain" status={true} />
                  <PlanFeatures detail="15+ integrations" status={true} />
                  <PlanFeatures detail="Basic support" status={true} />
                </div>

                <div className="border-t-2 rounded h-[1px] w-auto bg-gray-400 rotate90"></div>
                <div className="text-xs">
                  Dictum aliquet arcu egestas massa sed tellus sed arcu velit
                  tincidunt orci.
                </div>
              </div>

              <div className="bg-white   px-6 h-min py-5 w-80 border rounded-md">
                <div className="text-xs flex flex-col leading-none space-y-1">
                  <span className=" font-semibold text-xl">$24</span>
                  <span className="text-xl font-semibold text-dark">
                    Mini Business
                  </span>
                  <span>
                    Dictum aliquet arcu egestas massa sed tellus sed arcu velit
                    tincidunt orci.
                  </span>
                  <div className="border-t-2 rounded w-auto bg-gray-400 rotate90"></div>
                </div>

                <div className="mt-4 space-y-1.5 my-2 text-sm text-customGray ">
                  <PlanFeatures detail="Manage 1,000+ subs" status={true} />
                  <PlanFeatures detail="10 landing pages" status={true} />
                  <PlanFeatures detail="Customizable domain" status={true} />
                  <PlanFeatures detail="Basic support" status={true} />
                  <PlanFeatures detail="15+ integrations" status={true} />
                  <PlanFeatures detail="Basic support" status={true} />
                  <PlanFeatures detail="Basic support" status={true} />
                  <PlanFeatures detail="Basic support" status={true} />
                </div>

                <div className="border-t-2 rounded h-[1px] w-auto bg-gray-400 rotate90"></div>
                <div className="text-xs ">
                  Dictum aliquet arcu egestas massa sed tellus sed arcu velit
                  tincidunt orci.
                </div>
              </div>

              <div className="bg-white mr-10  px-6  py-5 max-w-80 border rounded-md">
                <div className="text-xs flex flex-col leading-none space-y-1">
                  <span className=" font-semibold text-xl">$48</span>
                  <span className="text-xl font-semibold text-dark">
                    Enterprise Business
                  </span>
                  <span>
                    Dictum aliquet arcu egestas massa sed tellus sed arcu velit
                    tincidunt orci.
                  </span>
                  <div className="border-t-2 rounded h-[1px] w-auto bg-gray-400 rotate90"></div>
                </div>

                <div className="mt-4 space-y-1.5 my-2 text-sm  text-customGray ">
                  <PlanFeatures detail="Manage 1,000+ subs" status={true} />
                  <PlanFeatures detail="10 landing pages" status={true} />
                  <PlanFeatures detail="Customizable domain" status={true} />
                  <PlanFeatures detail="15+ integrations" status={true} />
                  <PlanFeatures detail="15+ integrations" status={true} />
                  <PlanFeatures detail="15+ integrations" status={true} />
                  <PlanFeatures detail="15+ integrations" status={true} />
                  <PlanFeatures detail="Basic support" status={true} />
                  <PlanFeatures detail="Basic support" status={true} />
                  <PlanFeatures detail="Basic support" status={true} />
                </div>

                <div className="border-t-2 rounded h-[1px] w-auto bg-gray-400 rotate90"></div>
                <div className="text-xs">
                  Dictum aliquet arcu egestas massa sed tellus sed arcu velit
                  tincidunt orci.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanBody;
