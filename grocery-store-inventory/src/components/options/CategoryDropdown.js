import { useContext } from 'react';
import { TableContext } from '../../App';

export const CategoryDropdown = () => {
  const { setCategoryFilter } = useContext(TableContext);

  const dropdownSelectHandler = (e) => {
    if (e.target.value === 'All') {
      setCategoryFilter('');
    }
    else {
      setCategoryFilter(e.target.value);
    }
  };

  return (
    <select onChange={dropdownSelectHandler} defaultValue={'All'}>
      <option value="All">All</option>
      <option value="Drinks">Drinks</option>
      <option value="Cereal">Cereal</option>
      <option value="Bread">Bread</option>
    </select>
  );
};

export default CategoryDropdown;
