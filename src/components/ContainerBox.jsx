import { useContext } from "react";
import ListContext from "../context";

const ContainerBox = () => {
  const { list, setList } = useContext(ListContext);

  const handleToggle = (index) => {
    const updatedList = [...list];
    updatedList[index].isSelected = !updatedList[index].isSelected;
    setList(updatedList);
  };

  return (
    <div className="container">
      <div className="left-box">
        <ul>
          {list.map((li, index) => (
            <li key={index}>
              <input
                type="checkbox"
                value={li.isSelected}
                onChange={() => handleToggle(index)}
              />
              {li.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContainerBox;
