import { FaBackspace } from "react-icons/fa";
import Add from "./Add";
function Expenses(props) {
  return (
    <div className="expense">
      <div>💲{props.data.amount}</div>
      <div>{props.data.description}</div>
      <div>
        <FaBackspace className="remove" size={30} color={"red"} onClick={()=>props.remove(props.data.id)} />
      </div>
    </div>
  );
}

export default Expenses;
