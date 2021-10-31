import TableHeaders from './TableHeaders';
import TableRows from './TableRows';

import './Table.module.scss';
import { useContext } from 'react';
import { TableContext } from '../../App';

export const Table = () => {
  const { tableInstance } = useContext(TableContext);
  const { getTableProps, headerGroups } = tableInstance;

  return (
    <table {...getTableProps()}>
      <TableHeaders headerGroups={headerGroups} />
      <TableRows />
    </table>
  );
};

export default Table;
