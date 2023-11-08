import { useContext } from "react";
import { ListContext } from "./context";

const ContainerBox = ({ side }) => {
  const { list, setList } = useContext(ListContext);
  //  useEffect(() => {
  //     console.log(list)
  //   }, [list])
  return (
    <div className="container">
      <div className="left-box">
        <li>
          {list.map((li, index) => {
            if (side == li.isLeft) {
              return (
                <ul key={index}>
                  <input
                    type="checkbox" value={li.isSelected}
                    onChange={() => {
                      const updatedList = list.map((item) => ({...item}));
                      
                      updatedList[index].isSelected = !updatedList[index].isSelected; 
                      console.log(list,updatedList)
                      setList(updatedList); // Set the state with the updated list
                      console.log(list)
                    }}
                  />

                  {li.text}
                </ul>
              );
            }
          })}
        </li>
      </div>
    </div>
  );
};

export default ContainerBox;
