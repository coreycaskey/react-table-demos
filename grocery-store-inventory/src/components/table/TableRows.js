import { useContext, useEffect } from 'react';
import { TableContext } from '../../App';
import styles from './Table.module.scss';

const TableRows = () => {
  const { tableInstance, itemFilter, categoryFilter, discountToggle } = useContext(TableContext);
  const { getTableBodyProps, rows, prepareRow, setFilter } = tableInstance;

  useEffect(() => {
    setFilter('item', itemFilter);
  }, [itemFilter]);

  useEffect(() => {
    setFilter('category', categoryFilter);
  }, [categoryFilter]);

  useEffect(() => {
    setFilter('discount', discountToggle);
  }, [discountToggle]);

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
