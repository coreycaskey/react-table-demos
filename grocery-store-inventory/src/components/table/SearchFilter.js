import { useContext } from 'react';
import { TableContext } from '../../App';

export const SearchFilter = () => {
  const { setItemFilter } = useContext(TableContext);

  const filterChangeHandler = (e) => {
    setItemFilter(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search Items"
      onChange={filterChangeHandler}
    />
  );
};

export default SearchFilter;
