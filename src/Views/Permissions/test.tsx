import { useState } from "react";
import CurdUsers from "../Users/CurdUser";
import BlockContent from "../Users/blockContent";
import UserHeader from "../Users/UsersHeader";
import { DataTable } from "../Users/DataTable";

const ToggleContent = () => {
  const [showFirstContent, setShowFirstContent] = useState(true);

  const handleSelectUsers = (selectedOptions: string[]) => {
    const [rowSelection, setRowSelection] = useState({});
      const newRowSelection: { [key: string]: boolean } = {};
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
            <UserHeader onSelect={handleSelectUsers} />
            <BlockContent />
            <DataTable />
          </div>
        ) : (
          <div>
            <UserHeader onSelect={handleSelectUsers} />
            <CurdUsers />
          </div>
        )}
      </div>
      <button onClick={handleToggle}>{showFirstContent ? "eye" : "eye"}</button>
    </div>
  );
};

export default ToggleContent;
