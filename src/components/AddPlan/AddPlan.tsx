import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import CustomDropdown from "./CustomDropDown";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

function AddPlan() {
  return (
    <DialogContent className="sm:max-w-[425px] ">
      <div>
        <DialogHeader>
          <DialogTitle>Add Plan</DialogTitle>
          <DialogDescription className="text-xs">
            Add plan name and details for your reference
          </DialogDescription>
        </DialogHeader>
      </div>
      <div className="grid  pr-3 space-y-3">
        <span className="space-y-1 ">
          <Label>Enter Plan Name</Label>
          <Input
            type="text"
            placeholder="Plan name"
            className="border border-gray-300 rounded p-2 w-full "
          ></Input>
        </span>
        <span className="space-y-1 ">
          <Label>Description</Label>
          <Input
            type="text"
            placeholder="Plan Description"
            className="border border-gray-300 rounded p-2 w-full"
          ></Input>
        </span>

        <span className="space-y-1">
          <Label>Features</Label>
          <CustomDropdown />
        </span>
        <span className="space-y-1">
          <Label>Describe What it is recommended for?</Label>
          <Input
            type="text"
            placeholder="Plan recommendation"
            className="border border-gray-300 rounded p-2 w-full"
          ></Input>
        </span>
        <span className="space-y-1">
          <Label>Short Description</Label>
          <Input
            type="text"
            placeholder="Short Description"
            className="border border-gray-300 rounded p-2 w-full"
          ></Input>
        </span>
      </div>

      <DialogFooter>
        <div className="flex justify-between space-x-48 ">
          <span>
            <Button
              className="outlline-none border-none mr-2 bg-customGrayButton text-black text-semibold focus:outline-none hover:bg-white"
              type="submit"
            >
              Cancel
            </Button>
          </span>
          <span className="pr-3">
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
