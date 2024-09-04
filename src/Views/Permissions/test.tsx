import { useState } from "react";
import CurdUsers from "../Users/CurdUser";
import UserHeader from "../Users/UsersHeader";
import { Table } from "@/components/ui/table";

const ToggleContent = () => {
  const [showFirstContent, setShowFirstContent] = useState(true);

  const handleSelectUsers = (selectedOptions: string[]) => {
    const [rowSelection, setRowSelection] = useState({});
    const newRowSelection: { [key: string]: boolean } = {};
    const data: payment[] = [];
    data.forEach((row) => {
      if (
        selectedOptions.includes(row.status) ||
        selectedOptions.includes("All")
      ) {
        newRowSelection[row.id] = true;
      }
    });
    setRowSelection(newRowSelection);
  };

  const handleToggle = () => {
    setShowFirstContent(!showFirstContent);
  };

  return (
    <div>
      <div>
        {showFirstContent ? (
          <div>
            <Table />
          </div>
        ) : (
          <div>
            <UserHeader onSelect={handleSelectUsers} />
            <CurdUsers />
          </div>
        )}
      </div>
      <button onClick={handleToggle}>
        {showFirstContent ? "Button1" : "Button1"}
      </button>
    </div>
  );
};

export default ToggleContent;
