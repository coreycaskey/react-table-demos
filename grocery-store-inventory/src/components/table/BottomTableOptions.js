import TablePagination from "../options/TablePagination";
import RowCountDropdown from "../options/RowCountDropdown";

import styles from './Table.module.scss';

export const BottomTableOptions = () => {

  return (
    <div className={styles['bottom-table-options-container']}>
      <RowCountDropdown />
      <TablePagination />
    </div>
  )
};

export default BottomTableOptions;
