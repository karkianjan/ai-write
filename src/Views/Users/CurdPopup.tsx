import { Button } from "@/components/ui/button";
import { History } from "@/components/atom/icons/history";
import { EyeShow } from "@/components/atom/icons/eye";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CurdPopup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0 hover:border-none">
          <EyeShow />
        </Button>
      </DialogTrigger>
      <DialogContent className="  ">
        <DialogHeader>
          <DialogTitle>
            {" "}
            <span className="">
              <h1 className="font-bold mx-10 text-xl">ABC Company</h1>
              <p className="text-sm text-customUserSubHeader mx-10">
                Usage details regarding ABC
              </p>
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-between flex-end  items-center w-fit h-20 mx-10 lg:w-fit">
          <div className="flex space-x-5 justify-end ml-96 pl-52">
            <span>
              <Button
                variant="naked"
                className="bg-customGreen font-semibold text-white flex justify-between gap-4 hover:border-none"
              >
                <History /> Change Plan
              </Button>
            </span>
            <span>
              <Button
                variant="naked"
                className="bg-white font-semibold text-customDeleteAccount border-customDeleteAccount flex justify-between gap-4 hover:border-customDeleteAccount  "
              >
                <History /> Disable Account
              </Button>
            </span>
            <span>
              <Button
                variant="naked"
                className="bg-customDeleteAccount font-semibold text-white flex justify-between gap-4 hover:border-none"
              >
                <History /> Delete Account
              </Button>
            </span>
          </div>
        </div>
        <div className="bg-customLightGray h-52 py-5 mx-10 border rounded-lg">
          <form className="flex  justify-end space-x-20  pr-8">
            <span className="space-y-1.5">
              <Label>First Name</Label>
              <Input id="fName" type="text"></Input>
              <br />
              <Label>Middle Name</Label>
              <Input id="MName" type="text"></Input>
            </span>
            <span className="space-y-1.5">
              <Label>Last Name</Label>
              <Input id="lName" type="text"></Input>
              <br />
              <Label>Number</Label>
              <Input id="number" type="number"></Input>
            </span>
            <span className="space-y-1.5">
              <Label>Email</Label>
              <Input id="email" type="email"></Input>
              <br />
              <Label>Address</Label>
              <Input id="email" type="email"></Input>
            </span>
          </form>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
