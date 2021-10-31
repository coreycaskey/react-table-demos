import SearchFilter from "./SearchFilter";
import CategoryDropdown from "../options/CategoryDropdown";
import DiscountToggle from "../options/DiscountToggle";

import styles from './Table.module.scss';

export const TopTableOptions = () => {
  return (
    <div className={styles['top-table-options-container']}>
      <SearchFilter />
      <CategoryDropdown />
      <DiscountToggle />
    </div>
  )
};

export default TopTableOptions;
