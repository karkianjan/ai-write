import UserHeader from "./UsersHeader";

const UsersBody = () => {

    export function Data(data) {
      
        const [rowSelection, setRowSelection] = useState({data});
      
        const handleSelectUsers = (selectedOptions: string[]) => {
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
  return (
    <div>
      <UserHeader onSelect={handleSelectUsers} />
    </div>
  );
};

export default UsersBody;
