import DashboardFeatures from "@/components/organisms/dashboard/DashboardHeader/DashboardFeatures";
import { Button } from "@/components/ui/button";

const DashoardBody = () => {
  const handleClick = () => {};

  return (
    <>
      <div className=" m-10 bg-gray-200 border rounded-md h-full ">
        <div className="   xl:h-24  items-center">
          <div className="flex justify-between pt-6">
            <h1 className="pl-10 h-6 text-semibold  hidden shrink-0 text-2xl font-semibold text-dark lg:block">
              Our Plan
            </h1>

            <div className="pr-10">
              <Button
                size={"default"}
                variant="naked"
                className="h-11 px-6  py-2.5 text-md bg-customGreen text-white font-bold"
                onClick={handleClick}
              >
                Add Plan
              </Button>
            </div>
          </div>
          <div className="flex bg-gray-200  text-customGray pt-10 ">
            <div className=" grid-cols-3 flex justify-around flex-1  ">
              <div className="bg-white  px-6 ml-10 py-5 w-80 h-[325px] 2xl:h-[383px] 2xl:w-[383px] border rounded-md ">
                <p className="text-xs flex flex-col leading-none space-y-1">
                  <span className=" font-semibold text-xl">$0</span>
                  <span className="text-xl font-semibold text-dark">FREE</span>
                  <span>
                    Dictum aliquet arcu egestas massa sed tellus sed arcu velit
                    tincidunt orci.
                  </span>
                  <div className="border-t-2 rounded h-[1px] w-auto bg-gray-400 rotate90"></div>
                </p>

                <div className="mt-4 space-y-1.5 my-3 text-sm text-customGray ">
                  <DashboardFeatures
                    detail="Manage 1,000+ subs"
                    status={true}
                  />
                  <DashboardFeatures detail="10 landing pages" status={true} />
                  <DashboardFeatures
                    detail="Customizable domain"
                    status={true}
                  />
                  <DashboardFeatures detail="15+ integrations" status={true} />
                  <DashboardFeatures detail="Basic support" status={true} />
                </div>

                <div className="border-t-2 rounded h-[1px] w-auto bg-gray-400 rotate90"></div>
                <div className="text-xs">
                  Dictum aliquet arcu egestas massa sed tellus sed arcu velit
                  tincidunt orci.
                </div>
              </div>

              <div className="bg-white   px-6  py-5 h-[400px] w-80 2xl:h-[383px] 2xl:w-[383px] border rounded-md">
                <p className="text-xs flex flex-col leading-none space-y-1">
                  <span className=" font-semibold text-xl">$24</span>
                  <span className="text-xl font-semibold text-dark">
                    Mini Business
                  </span>
                  <span>
                    Dictum aliquet arcu egestas massa sed tellus sed arcu velit
                    tincidunt orci.
                  </span>
                  <div className="border-t-2 rounded h-[1px] w-auto bg-gray-400 rotate90"></div>
                </p>

                <div className="mt-4 space-y-1.5 my-2 text-sm text-customGray ">
                  <DashboardFeatures
                    detail="Manage 1,000+ subs"
                    status={true}
                  />
                  <DashboardFeatures detail="10 landing pages" status={true} />
                  <DashboardFeatures
                    detail="Customizable domain"
                    status={true}
                  />
                  <DashboardFeatures detail="15+ integrations" status={true} />
                  <DashboardFeatures detail="Basic support" status={true} />
                  <DashboardFeatures detail="Basic support" status={true} />
                  <DashboardFeatures detail="Basic support" status={true} />
                  <DashboardFeatures detail="Basic support" status={true} />
                </div>

                <div className="border-t-2 rounded h-[1px] w-auto bg-gray-400 rotate90"></div>
                <div className="text-xs ">
                  Dictum aliquet arcu egestas massa sed tellus sed arcu velit
                  tincidunt orci.
                </div>
              </div>

              <div className="bg-white mr-10  px-6 h-[450px] py-5 max-w-80 2xl:h-[383px] 2xl:w-[383px] border rounded-md">
                <p className="text-xs flex flex-col leading-none space-y-1">
                  <span className=" font-semibold text-xl">$48</span>
                  <span className="text-xl font-semibold text-dark">
                    Enterprise Business
                  </span>
                  <span>
                    Dictum aliquet arcu egestas massa sed tellus sed arcu velit
                    tincidunt orci.
                  </span>
                  <div className="border-t-2 rounded h-[1px] w-auto bg-gray-400 rotate90"></div>
                </p>

                <div className="mt-4 space-y-1.5 my-2 text-sm  text-customGray ">
                  <DashboardFeatures
                    detail="Manage 1,000+ subs"
                    status={true}
                  />
                  <DashboardFeatures detail="10 landing pages" status={true} />
                  <DashboardFeatures
                    detail="Customizable domain"
                    status={true}
                  />
                  <DashboardFeatures detail="15+ integrations" status={true} />
                  <DashboardFeatures detail="15+ integrations" status={true} />
                  <DashboardFeatures detail="15+ integrations" status={true} />
                  <DashboardFeatures detail="15+ integrations" status={true} />
                  <DashboardFeatures detail="Basic support" status={true} />
                  <DashboardFeatures detail="Basic support" status={true} />
                  <DashboardFeatures detail="Basic support" status={true} />
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

export default DashoardBody;
