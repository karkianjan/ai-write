import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import CustomDropdown from "./CostumDropDown";

const AddPlan: React.FC = () => {
  return (
    <AlertDialogContent className="w-fit">
      <AlertDialogHeader>
        <AlertDialogTitle>Add Plan</AlertDialogTitle>
        <AlertDialogDescription className="text-xs">
          Add plan name and details for your reference
        </AlertDialogDescription>
      </AlertDialogHeader>
      <form className="">
        <div className="py-3  space-y-1  ">
          <label>Enter Plan Name</label>
          <input
            type="text"
            placeholder="Plan name"
            className="border border-gray-300 rounded p-2 w-full "
          ></input>
          <br />
          <br />
          <label>Description</label>
          <input
            type="text"
            placeholder="Plan Description"
            className="border border-gray-300 rounded p-2 w-full"
          ></input>
          <br />
          <br />
          <div>
            <label>Features</label>
            <CustomDropdown />
          </div>
          <br />
          <label>Describe What it is recommended for?</label>
          <input
            type="text"
            placeholder="Plan recommendation"
            className="border border-gray-300 rounded p-2 w-full"
          ></input>
          <br />
          <br />

          <label>Short Description</label>
          <input
            type="text"
            placeholder="Short Description"
            className="border border-gray-300 rounded p-2 w-full"
          ></input>
          <br />
          <br />
        </div>

        <AlertDialogFooter>
          <div className="flex flex-1 justify-between pt-3">
            <AlertDialogCancel className="outlline-none border-none bg-customGrayButton text-black text-semibold focus:outline-none">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="bg-customGreen text-white hover:bg-green-800 border-none focus:outline-none ">
              Confirm
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </form>
    </AlertDialogContent>
  );
};

export default AddPlan;
