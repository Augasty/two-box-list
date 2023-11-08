import { useContext } from "react";
import { ListContext } from "../context";

const ReverseSelection = () => {
  const { list, setList } = useContext(ListContext);

  const handleClick = () => {
    const updatedList = list.map((item) => ({
      ...item,
      isSelected: !item.isSelected,
    }));
    
    setList(updatedList);
    console.log(list)
  };

  return (
    <button onClick={handleClick}>
      Reverse Selection
    </button>
  );
};

export default ReverseSelection;
