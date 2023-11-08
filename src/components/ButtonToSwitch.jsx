import { useContext } from "react";
import { ListContext } from "./context";

const ButtonToSwitch = ({ side }) => {
  const { list, setList } = useContext(ListContext);

  const handleClick = () => {
    let tempList = [...list];

    for (let li of tempList) {
      if (li.isSelected) {
        li.isLeft = side;
      }
      li.isSelected = false;
    }
    setList(tempList);
    console.log(list);
  };
  return (
    <button onClick={() => handleClick()}>
      {side ? "Send up" : "Send down"}
    </button>
  );
};

export default ButtonToSwitch;
