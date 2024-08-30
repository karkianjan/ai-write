import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

const AddPlan: React.FC = () => {
  return (
    <AlertDialogContent className="w-fit">
      <AlertDialogHeader>
        <AlertDialogTitle>Add Plan</AlertDialogTitle>
        <AlertDialogDescription className="text-xs">
          Add plan name and details for your reference
        </AlertDialogDescription>
      </AlertDialogHeader>
      <form>
        <div className="py-3 space-y-4 border-input ">
          <label>Enter Plan Name</label>
          <br />
          <input
            type="text"
            placeholder="Plan name"
            className="border border-gray-300 rounded p-2 w-full"
          ></input>
          <br />
          <br />
          <label>Description</label>
          <br />
          <input
            type="text"
            placeholder="Plan Description"
            className="border border-gray-300 rounded p-2 w-96"
          ></input>
          <br />
          <div className=""></div>
          <label>Describe What it is recommended for?</label>
          <br />
          <input
            type="text"
            placeholder="Plan recommendation"
            className="border border-gray-300 rounded p-2 w-full"
          ></input>
          <br />
          <br />

          <label>Short Description</label>
          <br />
          <input
            type="text"
            placeholder="Start growing your business"
            className="border border-gray-300 rounded p-2 w-full"
          ></input>
        </div>

        <AlertDialogFooter>
          <div className="flex flex-1 justify-between pt-3">
            <AlertDialogCancel className="outlline-none border-none bg-customGrayButton text-black text-semibold">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="bg-customGreen text-white hover:bg-green-800 border-none outline-none ">
              Confirm
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </form>
    </AlertDialogContent>
  );
};

export default AddPlan;
