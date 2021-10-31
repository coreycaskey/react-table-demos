import TableHeaders from './TableHeaders';
import TableRows from './TableRows';

import './Table.module.scss';

export const Table = ({ tableInstance }) => {
  const { getTableProps, headerGroups } = tableInstance;

  return (
    <table {...getTableProps()}>
      <TableHeaders headerGroups={headerGroups} />
      <TableRows tableInstance={tableInstance} />
    </table>
  );
};

export default Table;
