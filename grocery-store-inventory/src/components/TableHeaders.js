import './Table.module.scss';

const TableHeaders = ({ headerGroups }) => {
  return (
    <thead>
      {headerGroups.map((headerGroup, rowIndex) => (
        <tr
          key={`header_row_${rowIndex}`}
          {...headerGroup.getHeaderGroupProps()}
        >
          {headerGroup.headers.map((column, colIndex) => (
            <th key={`header_col_${colIndex}`} {...column.getHeaderProps}>
              {column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeaders;
export { TableHeaders };
