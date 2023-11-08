import { useContext } from "react";
import { ListContext } from "./context";

const Check = () => {
  const { list, setList } = useContext(ListContext);

  const handleClick = () => {
    // Create a new array with updated items
    const updatedList = list.map((item) => ({
      ...item,
      isSelected: false,
    }));

    // Update the state with the new array
    setList(updatedList);

    console.log(updatedList); // You can log the updatedList for verification
  };

  return (
    <button onClick={handleClick}>
      Check
    </button>
  );
};

export default Check;
