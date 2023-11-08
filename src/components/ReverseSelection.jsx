import { useContext } from "react";
import { ListContext } from "./context";

const ReverseSelection = () => {
  const { list, setList } = useContext(ListContext);

  const handleClick = () => {
    let tempList = [...list];
    for (let li of tempList) {
      li.isSelected = !li.isSelected;
    }
    console.log(tempList)
    setList(tempList);
  };
  return (
    <button onClick={() => handleClick()}>
      ReverseSelection
    </button>
  );
};

export default ReverseSelection
