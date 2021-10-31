import styles from './Table.module.scss';

const TableRows = ({ tableInstance }) => {
  const { getTableBodyProps, rows, prepareRow } = tableInstance;

  return (
    <tbody {...getTableBodyProps()}>
      {rows.map((row, rowIndex) => {
        prepareRow(row);
        return (
          <tr key={`body_row_${rowIndex}`} {...row.getRowProps()}>
            {row.cells.map((cell, cellIndex) => {
              let cellClass;

              if (cell.column.Header === 'Status' || cell.column.Header === 'Brand' || cell.column.Header === 'Category' || cell.column.Header === 'Size') {
                cellClass = styles.headerCell;
              }

              return (
                <td className={cellClass} key={`body_cell_${cellIndex}`} {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableRows;
export { TableRows };
