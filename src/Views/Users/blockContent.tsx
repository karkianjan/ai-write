import Download from "@/components/atom/icons/download";
import { Button } from "@/components/ui/button";

const BlockContent = () => {
  return (
    <>
      <div className="max-m-fit m-10 bg-customLightGray border rounded-md h-full">
        <div className="flex justify-between pt-6">
          <div className="flex flex-col">
            <div className="pl-10 h-6 text-2xl font-semibold text-dark flex flex-row space-x-3">
              <h1>User Details</h1>
              <span className="w-fit rounded-md bg-customGreen bg-opacity-10 px-2.5 py-0.5 text-sm">
                {/* {table.getFilteredRowModel().rows.length} user */}
              </span>
            </div>

            <div className="pl-10 pt-2 text-sm text-customGray font-thin flex">
              Keep track of users and manage them
            </div>
          </div>

          <div className="pr-7">
            <Button
              variant="outline"
              className="hover:border-none hover:bg-none w-fit mr-2.5"
            >
              <span className="flex justify-between items-center space-x-2">
                <Download />
                <p>Export</p>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockContent;
