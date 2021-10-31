import { createContext, useMemo, useState } from 'react';
import { useFilters, useTable } from 'react-table';

import { mapColumns } from './utils/mapColumns';
import { mapData } from './utils/mapData';

import styles from './App.module.scss';

import { Table } from './components/table/Table';
import TopTableOptions from './components/table/TopTableOptions';
import BottomTableOptions from './components/table/BottomTableOptions';

export const TableContext = createContext({});

function App() {
  const [itemFilter, setItemFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [discountToggle, setDiscountToggle] = useState(false);

  const columns = useMemo(() => mapColumns(), []);
  const data = useMemo(() => mapData(), []);

  const tableInstance = useTable({ columns, data }, useFilters);

  const contextValue = {
    tableInstance,
    itemFilter,
    setItemFilter,
    categoryFilter,
    setCategoryFilter,
    discountToggle,
    setDiscountToggle,
  };

  return (
    <TableContext.Provider value={contextValue}>
      <div className={styles.app}>
        <h1>Grocery Store Inventory</h1>
        <TopTableOptions />
        <Table />
        <BottomTableOptions />
      </div>
    </TableContext.Provider>
  );
}

export default App;

// search input
// select dropdown for categories
// toggle for discounts
// arrow pages, dropdown for number of records per page
// sorting for table columns
