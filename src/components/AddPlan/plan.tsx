import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import CustomDropdown from "./CustomDropDown";

export function AddPlan() {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <div>
        <DialogHeader>
          <DialogTitle>Add Plan</DialogTitle>
          <DialogDescription className="text-xs">
            Add plan name and details for your reference
          </DialogDescription>
        </DialogHeader>
      </div>
      <div className="grid  py-1">
        <form className="pr-3">
          <div className="py-1  space-y-1  ">
            <label>Enter Plan Name</label>
            <input
              type="text"
              placeholder="Plan name"
              className="border border-gray-300 rounded p-2 w-full "
            ></input>
            <br />
            <label>Description</label>
            <input
              type="text"
              placeholder="Plan Description"
              className="border border-gray-300 rounded p-2 w-full"
            ></input>
            <br />
            <span>
              <label>Features</label>
              <CustomDropdown />
            </span>
            <label>Describe What it is recommended for?</label>
            <input
              type="text"
              placeholder="Plan recommendation"
              className="border border-gray-300 rounded p-2 w-full"
            ></input>
            <br />

            <label>Short Description</label>
            <input
              type="text"
              placeholder="Short Description"
              className="border border-gray-300 rounded p-2 w-full"
            ></input>
            <br />
          </div>
        </form>
      </div>

      <DialogFooter>
        <div className="flex justify-between space-x-56 ">
          <span>
            <Button
              className="outlline-none border-none bg-customGrayButton text-black text-semibold focus:outline-none hover:bg-white"
              type="submit"
            >
              Cancel
            </Button>
          </span>
          <span className="pr-4">
            <Button
              className="bg-customGreen text-white hover:bg-green-800 border-none focus:outline-none "
              type="submit"
            >
              Confirm
            </Button>
          </span>
        </div>
      </DialogFooter>
    </DialogContent>
  );
}

export default AddPlan;
