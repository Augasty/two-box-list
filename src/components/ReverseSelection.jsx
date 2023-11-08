import { useContext } from "react";
import ListContext from "../context";

const ReverseSelection = () => {
  const { list, setList } = useContext(ListContext);

  const handleClick = () => {
    let tempList = [...list];
    for (let li of tempList) {
      li.isSelected = !li.isSelected;
    }
    setList([...tempList]);
    console.log(list)
  };
  return (
    <button onClick={() => handleClick()}>
      ReverseSelection
    </button>
  );
};

export default ReverseSelection
