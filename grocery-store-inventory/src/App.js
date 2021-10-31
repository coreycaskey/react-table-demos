import { useMemo } from 'react';
import { useTable } from 'react-table';

import { mapColumns } from './utils/mapColumns';
import { mapData } from './utils/mapData';

import styles from './App.module.scss';

import { Table } from './components/Table';
import TableOptions from './components/TableOptions';
import TablePagination from './components/TablePagination';

function App() {
  const columns = useMemo(() => mapColumns(), []);
  const data = useMemo(() => mapData(), []);

  const tableInstance = useTable({ columns, data });

  return (
    <div className={styles.app}>
      <h1>Grocery Store Inventory</h1>
      <TableOptions />
      <Table tableInstance={tableInstance} />
      <TablePagination />
    </div>
  );
}

export default App;

// search input
// select dropdown for categories
// toggle for discounts
// arrow pages, dropdown for number of records per page
// sorting for table columns
