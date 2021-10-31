import { useContext } from "react";
import { TableContext } from "../../App";

export const DiscountToggle = () => {
  const { setDiscountToggle } = useContext(TableContext);

  const toggleClickHandler = (e) => {
    setDiscountToggle(e.target.checked);
  }

  return (
    <>
      <p>Discount Toggle</p>
      <input type="checkbox" onChange={toggleClickHandler}></input>
    </>
  );
};

export default DiscountToggle;
